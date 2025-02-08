import express from "express";
import { bookCar, getAllCars, getCarDetails } from "../controllers/car.controller";
import authMiddleware from "../middleware/auth.middleware";


const carRoutes = express.Router();

// carRoutes.get("/", authMiddleware , getAllCars);
// carRoutes.get("/:id",authMiddleware ,  getCarDetails);
// carRoutes.get("/book" , authMiddleware , bookCar)



carRoutes.get("/",  getAllCars);
carRoutes.get("/:id",  getCarDetails);
carRoutes.get("/book", bookCar);
export default carRoutes;
