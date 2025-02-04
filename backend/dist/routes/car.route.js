"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("../controllers/car.controller");
const carRoutes = express_1.default.Router();
carRoutes.get("/", car_controller_1.getAllCars);
carRoutes.get("/:id", car_controller_1.getCarDetails);
exports.default = carRoutes;
