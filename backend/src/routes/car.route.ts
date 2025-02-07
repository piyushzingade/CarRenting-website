import express from "express";
import { bookCar, getAllCars, getCarDetails } from "../controllers/car.controller";
import authMiddleware from "../middleware/auth.middleware";


const carRoutes = express.Router();

carRoutes.get("/" ,getAllCars);
carRoutes.get("/:id",authMiddleware ,  getCarDetails);
carRoutes.get("/book" , authMiddleware , bookCar)

export default carRoutes;
