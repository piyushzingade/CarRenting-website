"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const packages_controller_1 = require("../controllers/packages.controller");
const packageRoutes = express_1.default.Router();
packageRoutes.get("/", packages_controller_1.getAllPackages);
packageRoutes.post("/book", packages_controller_1.bookPackage);
exports.default = packageRoutes;
