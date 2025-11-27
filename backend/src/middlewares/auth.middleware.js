import jwt from "jsonwebtoken";
import { config } from "../config/env.js";

export default function authRequired(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "Authorization header missing" });

  const token = header.startsWith("Bearer ") ? header.split(" ")[1] : header;
  if (!token) return res.status(401).json({ message: "Token missing" });

  try {
    const payload = jwt.verify(token, config.jwtSecret);
    req.user = { _id: payload.id }; 
    next();
  } catch (err) {
    console.error("Auth Error:", err.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
