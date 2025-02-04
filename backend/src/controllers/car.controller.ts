import { Request, Response } from "express";
import { Car } from "../models/car.model";

export const getAllCars = async (_req: Request, res: Response) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cars" });
  }
};

export const getCarDetails = async (req: Request, res: Response) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
       res.status(404).json({ error: "Car not found" });
       return;
}
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "Error fetching car details" });
  }
};
