import express from "express";
import { getPurchase, getUserProfile } from "../controllers/user.controller";
import authMiddleware from "../middleware/auth.middleware";


const userRoutes = express.Router();

userRoutes.get("/profile", authMiddleware, getUserProfile);
userRoutes.get("/buy", authMiddleware, getPurchase);

export default userRoutes;
