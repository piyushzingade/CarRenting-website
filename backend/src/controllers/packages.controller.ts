import { Request, Response } from "express";
import { Package } from "../models/package.model";

export const getAllPackages = async (_req: Request, res: Response) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching packages" });
  }
};

export const bookPackage = async (req: Request, res: Response) => {
  const { packageId, couponCode } = req.body;

  try {
    const packageDetails = await Package.findById(packageId);
    if (!packageDetails){
       res.status(404).json({ error: "Package not found" });
       return 
  }
    let finalPrice = packageDetails.price;
    if (couponCode && couponCode === packageDetails.couponCode) {
      finalPrice *= 0.9; // Apply 10% discount
    }

    // Payment integration using Razorpay or other gateway
    res
      .status(200)
      .json({ message: "Package booked successfully", finalPrice });
  } catch (error) {
    res.status(500).json({ error: "Error booking package" });
  }
};
