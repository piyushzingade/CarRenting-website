import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.route";
import carRoutes from "./routes/car.route";
import packageRoutes from "./routes/packages.route";
import contactRoutes from "./routes/contact.route";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/cars", carRoutes);
app.use("/packages", packageRoutes);
app.use("/contact", contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
