"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("../controllers/car.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const carRoutes = express_1.default.Router();
carRoutes.get("/", car_controller_1.getAllCars);
carRoutes.get("/:id", auth_middleware_1.default, car_controller_1.getCarDetails);
carRoutes.get("/book", auth_middleware_1.default, car_controller_1.bookCar);
exports.default = carRoutes;
