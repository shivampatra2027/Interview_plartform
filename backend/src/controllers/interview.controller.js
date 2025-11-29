// src/controllers/interview.controller.js

import  InterviewSession  from "../models/interviewSession.model.js";
import  Report  from "../models/report.model.js";
import { success } from "../utils/response.js";
import {
  generateQuestionsForPosition,
  evaluateInterviewAnswers,
} from "../services/ai.service.js";

export const createInterview = async (req, res, next) => {
  try {
    const { title, position, difficultyLevel, questionCount = 5 } = req.body;

    // normalize difficulty
    const allowedLevels = ["beginner", "easy", "hard", "advanced"];
    const level = allowedLevels.includes(difficultyLevel) ? difficultyLevel : "beginner";

    // generate questions and wrap in objects
    const rawQuestions = await generateQuestionsForPosition({
      position: position || "Software Developer",
      difficultyLevel: level,
      count: questionCount,
    });
    const questions = rawQuestions.map(q => ({ text: q }));

    const interview = await InterviewSession.create({
      user: req.auth.userId, // ensure req.user is set correctly
      title: title || "Mock Interview",
      position: position || "",
      difficultyLevel: level,
      status: "scheduled",
      questions,
      answers: [],
      currentQuestionIndex: 0,
    });

    return success(res, { interview }, "Interview session created", 201);
  } catch (err) {
    next(err);
  }
};

export const startInterview = async (req, res, next) => {
  try {
    const { id } = req.params;

    const interview = await InterviewSession.findOne({
      _id: id,
      user: req.auth.userId,
    });

    if (!interview) {
      return res
        .status(404)
        .json({ success: false, message: "Interview not found" });
    }

    if (interview.status === "completed" || interview.status === "cancelled") {
      return res
        .status(400)
        .json({
          success: false,
          message: "Interview already finished/cancelled",
        });
    }

    interview.status = "ongoing";
    if (!interview.startedAt) {
      interview.startedAt = new Date();
    }

    await interview.save();

    return success(res, { interview }, "Interview started");
  } catch (err) {
    next(err);
  }
};

export const submitAnswer = async (req, res, next) => {
  try {
    const { id } = req.params; // interview id

    const interview = await InterviewSession.findOne({
      _id: id,
      user: req.auth.userId,
    });

    if (!interview) {
      return res
        .status(404)
        .json({ success: false, message: "Interview not found" });
    }

    if (interview.status !== "ongoing") {
      return res
        .status(400)
        .json({ success: false, message: "Interview is not ongoing" });
    }
    
    const { questionIndex, answerText } = req.body;
    if (
  typeof questionIndex !== "number" ||
  isNaN(questionIndex) ||
  questionIndex < 0 ||
  questionIndex >= (interview.questions?.length || 0)
)  {
      return res
        .status(400)
        .json({ success: false, message: "Invalid question index" });
    }
    const existingIndex = interview.answers.findIndex(
      (a) => a.questionIndex === questionIndex
    );

    const answerPayload = {
      questionIndex,
      text: answerText || "",
      transcript: answerText || "",
      respondedAt: new Date(),
    };

    if (existingIndex === -1) {
      interview.answers.push(answerPayload);
    } else {
      interview.answers[existingIndex] = {
        ...interview.answers[existingIndex].toObject(),
        ...answerPayload,
      };
    }
    interview.currentQuestionIndex = questionIndex + 1;

    await interview.save();

    const isLast = interview.currentQuestionIndex >= interview.questions.length;

    return success(
      res,
      {
        interview,
        isLastQuestion: isLast,
      },
      "Answer submitted"
    );
  } catch (err) {
    next(err);
  }
};

export const completeInterview = async (req, res, next) => {
  try {
    const { id } = req.params;

    let interview = await InterviewSession.findOne({
      _id: id,
      user: req.auth.userId,
    });

    if (!interview) {
      return res
        .status(404)
        .json({ success: false, message: "Interview not found" });
    }

    if (interview.status === "completed") {
      const existingReport = await Report.findOne({
        interview: interview._id,
        user: req.auth.userId,
      });
      return success(
        res,
        {
          interview,
          report: existingReport,
        },
        "Interview already completed"
      );
    }

    //Plz note: Call evaluation with interviewId (and audioBase64 if available)
    const {
      overallScore,
      updatedAnswers,
      strengths,
      weaknesses,
      recommendations,
      rawAiFeedback,
    } = await evaluateInterviewAnswers({
      interviewId: interview._id,
      audioBase64: interview.answers?.[0]?.audioBase64 || null, // optional
    });

    // Update interview fields
    if (updatedAnswers) {
      interview.answers = updatedAnswers;
    }
    interview.overallScore = overallScore || 0;
    interview.status = "completed";
    interview.endedAt = new Date();

    // Create report
    const report = await Report.create({
      interview: interview._id,
      user: req.auth.userId,
      overallScore: interview.overallScore,
      strengths: strengths || [],
      weaknesses: weaknesses || [],
      recommendations: recommendations || [],
      skillBreakdown: [], 
      rawAiFeedback: rawAiFeedback || null,
    });
    console.log("Creating report for user:", req.user?._id);


    interview.report = report._id;
    await interview.save();

    return success(
      res,
      {
        interview,
        report,
      },
      "Interview completed and report generated"
    );
  } catch (err) {
    next(err);
  }
};


export const getMyInterviews = async (req, res, next) => {
  try {
    const interviews = await InterviewSession.find({
      user: req.auth.userId,
    })
      .sort({ createdAt: -1 })
      .select("-answers.rawAiFeedback");

    return success(res, { interviews }, "Interviews fetched");
  } catch (err) {
    next(err);
  }
};

export const getInterviewById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const interview = await InterviewSession.findOne({
      _id: id,
      user: req.auth.userId,
    }).populate("report");

    if (!interview) {
      return res
        .status(404)
        .json({ success: false, message: "Interview not found" });
    }

    return success(res, { interview }, "Interview fetched");
  } catch (err) {
    next(err);
  }
};
