// src/app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { clerkMiddleware } from '@clerk/express';

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import apiRouter from "./routes/index.js";
import { config } from "./config/env.js";

dotenv.config();

const app = express();

// CORS origins (frontend)
const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// Clerk middleware - must be before routes
app.use(clerkMiddleware());

// REST routes
app.use("/api/auth", authRoutes);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Server Already Running.");
});

// export a function to bootstrap DB (so server.js can call it)
export async function initApp() {
  await connectDB();
  return app;
}

export default app;
