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
exports.bookCar = exports.getCarDetails = exports.getAllCars = void 0;
const cars_1 = require("../data/cars"); // Ensure TypeScript allows JSON import
// Fetch all cars
const getAllCars = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(cars_1.carsData);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching cars" });
    }
});
exports.getAllCars = getAllCars;
// Fetch a single car by ID
const getCarDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const car = cars_1.carsData.find(
        //@ts-ignore
        (c) => c.id === req.params.id);
        if (!car) {
            res.status(404).json({ error: "Car not found" });
            return;
        }
        res.status(200).json(car);
    }
    catch (error) {
        res.status(500).json({ error: "Error fetching car details" });
    }
});
exports.getCarDetails = getCarDetails;
const bookCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { carId } = req.body;
    try {
        const carsDetails = cars_1.carsData.find((p) => p.id === carId);
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
    }
    catch (error) {
        res.status(500).json({ error: "Error booking package" });
    }
});
exports.bookCar = bookCar;
