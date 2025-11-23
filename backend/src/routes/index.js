// src/routes/index.js

import { Router } from "express";
import authRoutes from "./auth.routes.js";
import interviewRoutes from "./interview.routes.js";
import reportRoutes from "./reports.routes.js";

const router = Router();

// Basic API health check
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running. Available routes: /auth, /interviews, /reports",
  });
});

// Mount routes
router.use("/auth", authRoutes);
router.use("/interviews", interviewRoutes);
router.use("/reports", reportRoutes);

export default router;
