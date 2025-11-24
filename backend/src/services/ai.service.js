// src/services/ai.service.js
// ESM version: STT -> LLM -> TTS orchestration for press-to-answer flow.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";

import InterviewModel from "../models/interviewSession.model.js";
import QuestionModel from "../models/question.model.js";
import AnswerModel from "../models/answer.model.js";
import ReportModel from "../models/report.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* --------------------
   Utility: Save Base64 audio to temp file
-------------------- */
function saveBase64ToTmp(base64, ext = "webm") {
  const buffer = Buffer.from(base64, "base64");
  const filename = `${uuidv4()}.${ext}`;
  const tmpDir = path.join(__dirname, "..", "tmp");
  if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
  const filepath = path.join(tmpDir, filename);
  fs.writeFileSync(filepath, buffer);
  return filepath;
}

/* --------------------
   PROVIDER STUBS (Replace with real APIs)
-------------------- */

// STT
export async function callSTT_file(filepath) {
  return { text: "placeholder transcript - implement callSTT_file" };
}

// LLM (Evaluation + next question)
export async function callLLM_evaluate({ role, difficulty, questionText, userTranscript }) {
  return {
    feedback: "Good structure; include more concrete examples and edge-case discussion.",
    scores: { correctness: 7, depth: 6, communication: 8 },
    overallScore: 7,
    nextQuestion: "Can you show a small code example demonstrating polymorphism?"
  };
}

// TTS
export async function callTTS_textToBase64(text, voice = "default") {
  const silentWav = "UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA=";
  return silentWav;
}

/* --------------------
   CORE: Process User Audio
-------------------- */
export async function processUserAudio({ interviewId, audioBase64, audioExt = "webm" }) {
  if (!interviewId || !audioBase64) {
    throw new Error("processUserAudio: interviewId and audioBase64 required");
  }

  const tmpFile = saveBase64ToTmp(audioBase64, audioExt);

  try {
    // 1) STT
    const sttResult = await callSTT_file(tmpFile);
    const transcript = sttResult?.text?.trim() ?? "";

    // 2) Get last question
    const lastQuestion = await QuestionModel.findOne({ interview: interviewId })
      .sort({ orderIndex: -1 })
      .lean();

    const questionText = lastQuestion?.text ?? "";

    // 3) Interview meta
    const interview = await InterviewModel.findById(interviewId).lean();
    const role = interview?.role ?? "General";
    const difficulty = interview?.difficulty ?? "medium";

    // 4) LLM evaluation
    const llmResp = await callLLM_evaluate({
      role,
      difficulty,
      questionText,
      userTranscript: transcript
    });

    const feedback = llmResp.feedback ?? "No feedback provided";
    const scores = llmResp.scores ?? { correctness: 0, depth: 0, communication: 0 };

    const overallScore = (typeof llmResp.overallScore === "number")
      ? llmResp.overallScore
      : Math.round(((scores.correctness || 0) + (scores.depth || 0) + (scores.communication || 0)) / 3);

    const nextQuestionText = llmResp.nextQuestion ?? "Thank you — next question.";

    // 5) Save answer
    const answerDoc = await AnswerModel.create({
      interview: interviewId,
      question: lastQuestion ? lastQuestion._id : null,
      userTranscript: transcript,
      aiFeedback: feedback,
      score: overallScore,
      extraScores: scores,
      createdAt: new Date()
    });

    // 6) Save next question
    const nextIndex = lastQuestion ? lastQuestion.orderIndex + 1 : 0;

    const nextQuestionDoc = await QuestionModel.create({
      interview: interviewId,
      text: nextQuestionText,
      topic: "auto",
      orderIndex: nextIndex,
      createdAt: new Date()
    });

    // 7) Generate AI audio for feedback + next question
    const speechText = `Feedback: ${feedback}. Next question: ${nextQuestionText}`;
    const aiAudioBase64 = await callTTS_textToBase64(speechText);

    return {
      transcript,
      feedback,
      scores,
      overallScore,
      nextQuestionText,
      answerId: answerDoc._id,
      nextQuestionId: nextQuestionDoc._id,
      aiAudioBase64
    };
  } finally {
    try { fs.unlinkSync(tmpFile); } catch {}
  }
}

/* --------------------
   Wrapper (Fix for controller import)
-------------------- */
export async function evaluateInterviewAnswers({ interviewId, audioBase64, audioExt = "webm" }) {
  return await processUserAudio({ interviewId, audioBase64, audioExt });
}

/* --------------------
   Initial Question
-------------------- */
export async function generateInitialQuestion({ interviewId, role = "General", difficulty = "medium" }) {
  const llmResp = await callLLM_evaluate({
    role,
    difficulty,
    questionText: "",
    userTranscript: ""
  });

  const initialQuestionText =
    llmResp.nextQuestion || "Tell me about your recent projects and responsibilities.";

  const questionDoc = await QuestionModel.create({
    interview: interviewId,
    text: initialQuestionText,
    topic: "intro",
    orderIndex: 0,
    createdAt: new Date()
  });

  const aiAudioBase64 = await callTTS_textToBase64(initialQuestionText);

  return {
    questionId: questionDoc._id,
    questionText: initialQuestionText,
    aiAudioBase64
  };
}

/* --------------------
   Final Report
-------------------- */
export async function generateFinalReport(interviewId) {
  if (!interviewId) throw new Error("generateFinalReport: interviewId required");

  const answers = await AnswerModel.find({ interview: interviewId }).lean();

  const avgScore =
    answers.length === 0
      ? 0
      : Math.round(
          (answers.reduce((s, a) => s + (a.score || 0), 0) / answers.length) * 10
        ) / 10;

  const strengths = ["Clear communication", "Reasonable problem approach"];
  const weaknesses = ["Provide more concrete examples", "Consider edge cases"];
  const recommendations = [
    "Practice coding problems with unit tests",
    "Revise database joins and normalization"
  ];

  const reportDoc = await ReportModel.create({
    interview: interviewId,
    strengths,
    weaknesses,
    recommendations,
    overallScore: avgScore,
    createdAt: new Date()
  });

  await InterviewModel.findByIdAndUpdate(interviewId, {
    overallScore: avgScore,
    endedAt: new Date()
  });

  return reportDoc;
}
// Generate questions for a chosen role/position (stub)
export async function generateQuestionsForPosition(role = "General", difficulty = "medium") {
  // Replace with LLM call in future
  const questions = [
    `What do you know about ${role}?`,
    `Explain a recent project where you applied ${role} skills.`,
    `What challenges do you face in ${role} roles?`
  ];

  return questions;
}
