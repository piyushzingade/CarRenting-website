import { Request, Response } from "express";
import { Package } from "../models/package.model"; // Import Mongoose model

// Fetch all packages

interface Package {
  name: string;
  price: number;
  destinations: string[];
  couponCode?: string;
  image: string;
  availability: boolean;
}

export const getAllPackages = async (_req: Request, res: Response) => {
  try {
    const packages = await Package.find();

    res.status(200).json(packages);
  } catch (error  : any) {
    console.error("Error fetching packages:", error);
    res.status(500).json({ error: error.message || "Error fetching packages" });
  }
};

// Book a package
export const bookPackage = async (req: Request, res: Response) => {
  const { packageId, couponCode } = req.body;

  try {
    const packageDetails = await Package.findById(packageId);

    if (!packageDetails) {
       res.status(404).json({ error: "Package not found" });
       return;
    }

    let finalPrice = packageDetails.price;

    // Apply discount if the coupon code matches
    if (couponCode && couponCode === packageDetails.couponCode) {
      finalPrice *= 0.9; // Apply 10% discount
    }

    res.status(200).json({
      message: "Package booked successfully",
      packageDetails,
      finalPrice,
    });
  } catch (error  :any) {
    console.error("Error booking package:", error);
    res.status(500).json({ error: error.message || "Error booking package" });
  }
};

// Get details of a specific package
export const getPackageDetails = async (req: Request, res: Response) => {
  try {
    const foundPackage = await Package.findById(req.params.id);

    if (!foundPackage) {
       res.status(404).json({ error: "Package not found" });
       return;
    }

    res.status(200).json(foundPackage);
  } catch (error : any) {
    console.error("Error fetching package details:", error);
    res
      .status(500)
      .json({ error: error.message || "Error fetching package details" });
  }
};
