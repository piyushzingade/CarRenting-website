import { Request, Response } from "express";
import { Car } from "../models/car.model";

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
    res.status(500).json({ error: "Error fetching cars", details: error });
  }
};

// ✅ Fetch a car by ID
export const getCarDetails = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);

    if (!car) {
      res.status(404).json({ error: "Car not found" });
      return;
    }

    res.status(200).json(car);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching car details", details: error });
  }
};

// ✅ Book a car (update availability)
export const bookCar = async (req: Request, res: Response) => {
  const { carId } = req.body;

  try {
    const car = await Car.findById(carId);

    if (!car) {
      res.status(404).json({ error: "Car not found" });
      return;
    }

    if (!car.availability) {
      res.status(400).json({ error: "Car is already booked" });
      return;
    }

    // Mark car as booked (unavailable)
    car.availability = false;
    await car.save();

    res.status(200).json({
      message: "Car booked successfully",
      car,
    });
  } catch (error) {
    res.status(500).json({ error: "Error booking car", details: error });
  }
};
