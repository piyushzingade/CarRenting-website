import express from "express";
import {
  bookPackage,
  getAllPackages,

} from "../controllers/packages.controller";

const packageRoutes = express.Router();

packageRoutes.get("/", getAllPackages);
packageRoutes.post("/book", bookPackage);

export default packageRoutes;
