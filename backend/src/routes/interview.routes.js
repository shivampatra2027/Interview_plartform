//interview.rou..
// src/routes/interview.routes.js

import { Router } from "express";
import  authRequired  from "../middlewares/auth.middleware.js";

import {
  createInterview,
  startInterview,
  submitAnswer,
  completeInterview,
  getMyInterviews,
  getInterviewById,
} from "../controllers/interview.controller.js";

const router = Router();
router.use(authRequired);
router.post("/", createInterview);
router.get("/", getMyInterviews);

router.get("/:id", getInterviewById);
router.post("/:id/start", startInterview);
router.post("/:id/answer", submitAnswer);
router.post("/:id/complete", completeInterview);

export default router;
