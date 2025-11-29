import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
  {

    user: { type: String, ref: "User", required: true },
    interview: { type: mongoose.Schema.Types.ObjectId, ref: "Interview" },

    summary: { type: String, default: "" },
    overallScore: { type: Number, default: null },
    details: { type: Object, default: {} }
  },
  { timestamps: true }
);

export default mongoose.model("Report", ReportSchema);
