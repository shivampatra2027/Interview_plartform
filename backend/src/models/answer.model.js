// src/models/answer.model.js
import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    interview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InterviewSession",
      required: true,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
      default: null, // first answer may not have a previous question
    },
    userTranscript: {
      type: String,
      required: true,
    },
    aiFeedback: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
      default: 0,
    },
    extraScores: {
      correctness: { type: Number, default: 0 },
      depth: { type: Number, default: 0 },
      communication: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const AnswerModel = mongoose.model("Answer", answerSchema);

export default AnswerModel;
