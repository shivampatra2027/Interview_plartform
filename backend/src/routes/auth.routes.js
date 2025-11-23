// /f:/Interview_plartform/backend/src/routes/auth.routes.js
import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
// router.post("/logout", logout);
// router.post("/refresh", refreshToken);
router.get("/me", getMe);

export default router;
