// src/models/report.model.js
import mongoose from "mongoose";

const skillScoreSchema = new mongoose.Schema(
  {
    skill: { type: String, required: true },
    score: { type: Number, min: 0, max: 10, required: true },
    comment: { type: String, default: "" },
  },
  { _id: false }
);

const reportSchema = new mongoose.Schema(
  {
    interview: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InterviewSession",
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    overallScore: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    recommendations: {
      type: [String],
      default: [],
    },

    skillBreakdown: {
      type: [skillScoreSchema],
      default: [],
    },

    rawAiFeedback: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// ⬅️ THIS IS THE IMPORTANT FIX
const ReportModel = mongoose.model("Report", reportSchema);
export default ReportModel;
