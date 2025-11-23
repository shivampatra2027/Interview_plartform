import dotenv from "dotenv";
dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("❌ JWT_SECRET must be defined in .env");
}

export const JWT_SECRET = process.env.JWT_SECRET;

export const config = {
  port: process.env.PORT || 5000,
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
  secretKey: JWT_SECRET,
};
