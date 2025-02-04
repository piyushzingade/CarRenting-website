import express from "express";
import { contactUs } from "../controllers/contact.controller";
import authMiddleware from "../middleware/auth.middleware";

const contactRoutes = express.Router();

contactRoutes.post("/",authMiddleware ,  contactUs);

export default contactRoutes;
