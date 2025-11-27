// src/models/interviewSession.model.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    category: { type: String, default: "general" },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "medium",
    },
    aiHint: { type: String, default: "" },
  },
  { _id: false }
);

const answerSchema = new mongoose.Schema(
  {
    questionIndex: { type: Number, required: true },
    text: { type: String, default: "" },
    transcript: { type: String, default: "" },
    score: { type: Number, min: 0, max: 10, default: null },
    feedback: { type: String, default: "" },
    respondedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const interviewSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      default: "Mock Interview",
    },

    position: {
      type: String,
      default: "",
    },

    difficultyLevel: {
      type: String,
      enum: ["beginner", "easy", "medium", "hard", "advanced"], 
      default: "beginner"
    },

    status: {
      type: String,
      enum: ["scheduled", "ongoing", "completed", "cancelled"],
      default: "scheduled",
    },

    questions: [questionSchema],

    answers: [answerSchema],

    currentQuestionIndex: {
      type: Number,
      default: 0,
    },

    startedAt: {
      type: Date,
    },

    endedAt: {
      type: Date,
    },

    overallScore: {
      type: Number,
      min: 0,
      max: 10,
      default: null,
    },

    report: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
      default: null,
    },
  },
  { timestamps: true }
);


const InterviewSession = mongoose.model(
  "InterviewSession",
  interviewSessionSchema
);
export default InterviewSession;


export function evaluateInterviewAnswers(answers) {
  return answers.map(ans => ({
    ...ans,
    score: ans.text.length > 0 ? 7 : 0,
    feedback: ans.text.length > 0 ? "Good attempt" : "No answer provided"
  }));
}
