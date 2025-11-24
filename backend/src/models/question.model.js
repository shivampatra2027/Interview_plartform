// src/models/question.model.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    interview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InterviewSession",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      default: "general",
    },
    orderIndex: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuestionModel = mongoose.model("Question", questionSchema);

export default QuestionModel;
