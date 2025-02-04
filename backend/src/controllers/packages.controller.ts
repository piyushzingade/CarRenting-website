import { Request, Response } from "express";
import { packages } from "../data/packages"; // Import JSON directly

// Define the package type
interface Package {
  id: string;
  name: string;
  price: number;
  destinations: string[];
  couponCode?: string;
}

// Fetch all packages
export const getAllPackages = async (_req: Request, res: Response) => {
  try {
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching packages" });
  }
};

// Book a package
export const bookPackage = async (req: Request, res: Response) => {
  const { packageId, couponCode } = req.body;

  try {
    const packageDetails: Package | undefined = packages.find(
      (p: Package) => p.id === packageId
    );

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
  } catch (error) {
    res.status(500).json({ error: "Error booking package" });
  }
};

// Get details of a specific package
export const getPackageDetails = async (req: Request, res: Response) => {
  try {
    const foundPackage: Package | undefined = packages.find(
      (p: Package) => p.id === req.params.id
    );

    if (!foundPackage) {
      res.status(404).json({ error: "Package not found" });
      return;
    }

    res.status(200).json(foundPackage);
  } catch (error) {
    res.status(500).json({ error: "Error fetching package details" });
  }
};
