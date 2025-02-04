"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validate_1 = __importDefault(require("../utils/validate"));
const auth_controller_1 = require("../controllers/auth.controller");
const user_model_1 = require("../models/user.model");
const authRoutes = express_1.default.Router();
authRoutes.post("/signup", (0, validate_1.default)(user_model_1.signupSchema), auth_controller_1.signup);
authRoutes.post("/signin", (0, validate_1.default)(user_model_1.signinSchema), auth_controller_1.signin);
authRoutes.post("/google-auth", auth_controller_1.googleAuth);
exports.default = authRoutes;
