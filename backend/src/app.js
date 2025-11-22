import express from "express";
import cors from "cors";
import morgan from "morgan";
import { NODE_ENV } from "./config/env.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import routes from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
if (NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.json({ message: "AI Interview Backend is running" });
});
app.use("/api", routes);
app.use(errorHandler);

export default app;
