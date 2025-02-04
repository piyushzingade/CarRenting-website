import express from "express";
import { getAllCars, getCarDetails } from "../controllers/car.controller";
import authMiddleware from "../middleware/auth.middleware";


const carRoutes = express.Router();

carRoutes.get("/",authMiddleware ,getAllCars);
carRoutes.get("/:id",authMiddleware ,  getCarDetails);

export default carRoutes;
