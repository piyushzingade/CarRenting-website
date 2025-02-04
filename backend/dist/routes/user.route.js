"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const userRoutes = express_1.default.Router();
userRoutes.get("/profile", auth_middleware_1.default, user_controller_1.getUserProfile);
userRoutes.get("/buy", auth_middleware_1.default, user_controller_1.getPurchase);
exports.default = userRoutes;
