import express from "express";
import {
  bookPackage,
  getAllPackages,
  getPackageDetails,

} from "../controllers/packages.controller";
import authMiddleware from "../middleware/auth.middleware";

const packageRoutes = express.Router();

packageRoutes.get("/", authMiddleware , getAllPackages);
packageRoutes.get("/:id", authMiddleware, getPackageDetails);

packageRoutes.post("/book" , authMiddleware ,  bookPackage);

export default packageRoutes;
