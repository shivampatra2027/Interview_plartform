// src/controllers/report.controller.js
import mongoose from "mongoose";
import Report from "../models/report.model.js";
import { success } from "../utils/response.js";

const { Types: { ObjectId } } = mongoose;
function sanitizeId(rawId) {
  if (!rawId) return null;
  let s = String(rawId).trim();
  // remove leading colons like ":6929..."
  s = s.replace(/^:+/, "").trim();
  if (/^[0-9a-fA-F]{24}$/.test(s)) return s;
  const match = s.match(/([0-9a-fA-F]{24})$/);
  if (match) return match[1];

  
  return s;
}

function isValidObjectIdString(idStr) {
  return typeof idStr === "string" && ObjectId.isValid(idStr) && /^[0-9a-fA-F]{24}$/.test(idStr);
}

export const generateReport = async (req, res, next) => {
  try {
    const { interviewId: rawInterviewId, summary, score, details } = req.body;

    // sanitize and validate interviewId if provided
    let interviewId = null;
    if (rawInterviewId) {
      const cleaned = sanitizeId(rawInterviewId);
      if (!isValidObjectIdString(cleaned)) {
        return res.status(400).json({ success: false, message: "Invalid interviewId" });
      }
      interviewId = new ObjectId(cleaned);
    }

    const newReport = await Report.create({
      user: req.auth.userId,
      interview: interviewId,
      summary: summary || "",
      overallScore: score ?? null,
      details: details || {}
    });

    return success(res, { report: newReport }, "Report generated!");
  } catch (error) {
    next(error);
  }
};

export const getMyReport = async (req, res, next) => {
  try {
    const userId = req.auth?.userId;
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID not found in request" });
    }

    const reports = await Report.find({ user: userId })
      .populate("interview", "title position difficultyLevel status overallScore")
      .sort({ createdAt: -1 });

    return success(res, { reports }, "Reports fetched!");
  } catch (error) {
    next(error);
  }
};

export const getReportById = async (req, res, next) => {
  try {
    const { id: rawId } = req.params;
    const cleaned = sanitizeId(rawId);

    if (!isValidObjectIdString(cleaned)) {
      return res.status(400).json({ success: false, message: "Invalid report id" });
    }
    const id = new ObjectId(cleaned);

    const report = await Report.findOne({ _id: id, user: req.auth.userId }).populate("interview");
    if (!report) {
      return res.status(404).json({ success: false, message: "No report found!" });
    }
    return success(res, { report }, "Report fetched!");
  } catch (error) {
    next(error);
  }
};
export const getReportForInterview = async (req, res, next) => {
  try {
    
    const rawInterviewId = req.params.interviewId ?? req.params.id ?? req.query.interviewId ?? req.query.interview;
    if (!rawInterviewId) {
      return res.status(400).json({ success: false, message: "Interview ID is required" });
    }

    const cleaned = sanitizeId(rawInterviewId);
    if (!isValidObjectIdString(cleaned)) {
      console.debug("Invalid interview id received:", rawInterviewId);
      return res.status(400).json({ success: false, message: "Invalid interview id" });
    }
    const interviewObjectId = new ObjectId(cleaned);

    const reports = await Report.find({ interview: interviewObjectId, user: req.auth.userId })
      .populate("interview", "title position difficultyLevel status overallScore")
      .sort({ createdAt: -1 });

    return success(res, { reports }, "Reports for interview fetched!");
  } catch (error) {
    next(error);
  }
};

export const listUserReports = async (req, res, next) => {
  try {
    const reports = await Report.find({ user: req.auth.userId })
      .populate("interview", "title position difficultyLevel status overallScore")
      .sort({ createdAt: -1 });

    return success(res, { reports }, "All user reports fetched!");
  } catch (error) {
    next(error);
  }
};
