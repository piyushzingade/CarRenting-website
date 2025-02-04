import express from "express";
import { contactUs } from "../controllers/contact.controller";

const contactRoutes = express.Router();

contactRoutes.post("/", contactUs);

export default contactRoutes;
