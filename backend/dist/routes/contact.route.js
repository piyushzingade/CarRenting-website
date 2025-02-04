"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_controller_1 = require("../controllers/contact.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const contactRoutes = express_1.default.Router();
contactRoutes.post("/", auth_middleware_1.default, contact_controller_1.contactUs);
exports.default = contactRoutes;
