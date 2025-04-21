import express, { RequestHandler } from "express";
import { bookCar, getAllCars, getCarDetails } from "../controllers/car.controller";
import authMiddleware from "../middleware/auth.middleware";

const carRoutes = express.Router();

// Public routes
carRoutes.get("/", getAllCars as RequestHandler);

// Protected routes (uncomment to enable authentication)
// carRoutes.use(authMiddleware);

// Specific routes should come before parameter routes
carRoutes.get("/book", bookCar as RequestHandler);

// Parameter routes
carRoutes.get("/:id", getCarDetails as RequestHandler);

export default carRoutes;
