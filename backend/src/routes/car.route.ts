import express from "express";
import { getAllCars, getCarDetails } from "../controllers/car.controller";


const carRoutes = express.Router();

carRoutes.get("/", getAllCars);
carRoutes.get("/:id", getCarDetails);

export default carRoutes;
