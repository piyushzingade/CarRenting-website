import { Request, Response } from "express";
import { carsData} from "../data/cars"; // Ensure TypeScript allows JSON import

// Define the car type based on schema
interface Car {
  id: string;
  name: string;
  type: "economy" | "premium" | "luxury";
  price: number;
  description: string;
  availability: boolean;
}

// Fetch all cars
export const getAllCars = async (_req: Request, res: Response) => {
  try {
    res.status(200).json(carsData);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cars" });
  }
};

// Fetch a single car by ID
export const getCarDetails = async (req: Request, res: Response) => {
  try {
    
    const car: Car | undefined = carsData.find(
      //@ts-ignore
      (c: Car) => c.id === req.params.id
    );

    if (!car) {
       res.status(404).json({ error: "Car not found" });
       return;
    }

    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: "Error fetching car details" });
  }
};

export const bookCar = async (req: Request, res: Response) => {
  const { carId } = req.body;

  try {
    const carsDetails= carsData.find(
      (p) => p.id === carId
    );

    if (!carsDetails) {
      res.status(404).json({ error: "Car not found" });
      return;
    }

    let finalPrice = carsDetails.price;

    // Apply discount if the coupon code matches
    // if ( && couponCode === packageDetails.couponCode) {
    //   finalPrice *= 0.9; // Apply 10% discount
    // }

    res.status(200).json({
      message: "Package booked successfully",
      carsDetails,
      finalPrice,
    });
  } catch (error) {
    res.status(500).json({ error: "Error booking package" });
  }
};