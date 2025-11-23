// src/config/env.js
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
export const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ai-interview";
export const JWT_SECRET =
  process.env.JWT_SECRET || process.env.SECRET || "your_super_secret_key";
export const NODE_ENV = process.env.NODE_ENV || "development";
