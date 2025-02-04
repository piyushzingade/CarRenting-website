"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const packages_controller_1 = require("../controllers/packages.controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const packageRoutes = express_1.default.Router();
packageRoutes.get("/", auth_middleware_1.default, packages_controller_1.getAllPackages);
packageRoutes.get("/:id", auth_middleware_1.default, packages_controller_1.getPackageDetails);
packageRoutes.post("/book", auth_middleware_1.default, packages_controller_1.bookPackage);
exports.default = packageRoutes;
