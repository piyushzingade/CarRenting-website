import express from "express";
import validate from "../utils/validate";
import { googleAuth, signin, signup } from "../controllers/auth.controller";
import { signinSchema, signupSchema } from "../models/user.model";


const authRoutes = express.Router();

authRoutes.post("/signup", validate(signupSchema), signup);
authRoutes.post("/signin", validate(signinSchema), signin);
authRoutes.post("/google-auth", googleAuth);

export default authRoutes;
