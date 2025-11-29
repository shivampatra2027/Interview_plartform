//interview.rou..
// src/routes/interview.routes.js

import { Router } from "express";
import { requireAuth } from "../middlewares/clerk.middleware.js";

import {
  createInterview,
  startInterview,
  submitAnswer,
  completeInterview,
  getMyInterviews,
  getInterviewById,
} from "../controllers/interview.controller.js";

const router = Router();
router.use(requireAuth);
router.post("/", createInterview);
router.get("/", getMyInterviews);
router.get("/interview/debug-user", (req, res) => {
  console.log("req.auth:", req.auth);
  res.json({ auth: req.auth });
});

router.get("/:id", getInterviewById);
router.post("/:id/start", startInterview);
router.post("/:id/answer", submitAnswer);
router.post("/:id/complete", completeInterview);
router.get("/debug-user", (req, res) => {
  console.log("req.auth:", req.auth);
  res.json({ auth: req.auth });
});

export default router;
