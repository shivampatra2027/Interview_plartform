//report.routes..
// src/routes/report.routes.js
import express from "express";
import {
  generateReport,
  getReportById,
  getReportForInterview,
  listUserReports
} from "../controllers/report.controller.js";

import { requireAuth } from "../middlewares/clerk.middleware.js"; 

const router = express.Router();
router.post("/generate", requireAuth, generateReport);
router.get("/", requireAuth, listUserReports);
router.get("/:reportId", requireAuth, getReportById);
router.get("/interview/:interviewId", requireAuth, getReportForInterview);

export default router;
