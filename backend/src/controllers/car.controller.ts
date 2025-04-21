import { Request, Response } from "express";
import { Car } from "../models/car.model";
import mongoose from "mongoose";

// Define the car type based on schema
interface Car {
  id: string;
  name: string;
  type: "economy" | "premium" | "luxury";
  price: number;
  description: string;
  availability: boolean;
  image:string
}

// Fetch all cars
export const getAllCars = async (_req: Request, res: Response) => {
  try {
    const cars = await Car.find(); // Fetch all cars
    res.status(200).json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Error fetching cars", details: error });
  }
};

// ✅ Fetch a car by ID
export const getCarDetails = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Check if id is valid
    if (!id || id === "undefined" || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid car ID" });
    }

    const car = await Car.findById(id);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json(car);
  } catch (error) {
    console.error("Error fetching car details:", error);
    res.status(500).json({ error: "Error fetching car details", details: error });
  }
};

// ✅ Book a car (update availability)
export const bookCar = async (req: Request, res: Response) => {
  const { carId } = req.body;

  try {
    // Check if carId is valid
    if (!carId || carId === "undefined" || !mongoose.Types.ObjectId.isValid(carId)) {
      return res.status(400).json({ error: "Invalid car ID" });
    }

    const car = await Car.findById(carId);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    if (!car.availability) {
      return res.status(400).json({ error: "Car is already booked" });
    }

    // Mark car as booked (unavailable)
    car.availability = false;
    await car.save();

    res.status(200).json({
      message: "Car booked successfully",
      car,
    });
  } catch (error) {
    console.error("Error booking car:", error);
    res.status(500).json({ error: "Error booking car", details: error });
  }
};
