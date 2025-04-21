import express from "express";
import { addToCart, getUserCart, getUserProfile, removeFromCart } from "../controllers/user.controller";
import authMiddleware from "../middleware/auth.middleware";


const userRoutes = express.Router();

userRoutes.get("/profile", authMiddleware, getUserProfile);
userRoutes.post("/cart/add",  addToCart);
userRoutes.post("/cart/remove", removeFromCart);
userRoutes.get("/cart",  getUserCart);

export default userRoutes;
