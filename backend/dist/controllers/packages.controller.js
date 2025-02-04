"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPackageDetails = exports.bookPackage = exports.getAllPackages = void 0;
const packages_1 = require("../data/packages"); // Import JSON directly
// Fetch all packages
const getAllPackages = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(packages_1.packages);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching packages" });
    }
});
exports.getAllPackages = getAllPackages;
// Book a package
const bookPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { packageId, couponCode } = req.body;
    try {
        const packageDetails = packages_1.packages.find((p) => p.id === packageId);
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
    }
    catch (error) {
        res.status(500).json({ error: "Error booking package" });
    }
});
exports.bookPackage = bookPackage;
// Get details of a specific package
const getPackageDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundPackage = packages_1.packages.find((p) => p.id === req.params.id);
        if (!foundPackage) {
            res.status(404).json({ error: "Package not found" });
            return;
        }
        res.status(200).json(foundPackage);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching package details" });
    }
});
exports.getPackageDetails = getPackageDetails;
