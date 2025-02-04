import express from "express";
import { getUserProfile } from "../controllers/user.controller";
import authMiddleware from "../middleware/auth.middleware";


const userRoutes = express.Router();

userRoutes.get("/profile", authMiddleware, getUserProfile);

export default userRoutes;
