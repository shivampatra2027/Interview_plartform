import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import  connectDB  from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import interviewRoutes from "./routes/interview.routes.js";
import { config } from "./config/env.js";
import apiRouter from "./routes/index.js";
dotenv.config();
const PORT = process.env.PORT || 5001;


const app = express();
const allowedOrigins = [process.env.CLIENT_URL || "http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Server Already Running.");
});
app.use("/api",apiRouter);
app.use("/api/interview", interviewRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is live at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting the DB..", err.message);
    process.exit(1);
  });
