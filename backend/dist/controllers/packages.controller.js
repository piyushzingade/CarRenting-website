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
exports.bookPackage = exports.getAllPackages = void 0;
const package_model_1 = require("../models/package.model");
const getAllPackages = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield package_model_1.Package.find();
        res.status(200).json(packages);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching packages" });
    }
});
exports.getAllPackages = getAllPackages;
const bookPackage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { packageId, couponCode } = req.body;
    try {
        const packageDetails = yield package_model_1.Package.findById(packageId);
        if (!packageDetails) {
            res.status(404).json({ error: "Package not found" });
            return;
        }
        let finalPrice = packageDetails.price;
        if (couponCode && couponCode === packageDetails.couponCode) {
            finalPrice *= 0.9; // Apply 10% discount
        }
        // Payment integration using Razorpay or other gateway
        res
            .status(200)
            .json({ message: "Package booked successfully", finalPrice });
    }
    catch (error) {
        res.status(500).json({ error: "Error booking package" });
    }
});
exports.bookPackage = bookPackage;
