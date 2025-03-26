import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.route";
import carRoutes from "./routes/car.route";
import packageRoutes from "./routes/packages.route";
import contactRoutes from "./routes/contact.route";
import connectDB from "./db/db";



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



const PORT = process.env.PORT || 3001;


// app.get("/add" , async (req , res) => {
//   let packages = [
//     {
//       id: "1",
//       name: "Golden Triangle Tour",
//       price: 25000,
//       destinations: ["Delhi", "Agra", "Jaipur"],
//       couponCode: "2025",
//       availability: true,
//       image: "p1.jpeg",
//     },
//     {
//       id: "2",
//       name: "Goa Beach Getaway",
//       price: 30000,
//       destinations: ["Goa"],
//       couponCode: "2025",
//       availability: true,
//       image: "p2.jpeg",
//     },
//     {
//       id: "3",
//       name: "Kerala Backwaters Retreat",
//       price: 35000,
//       destinations: ["Kochi", "Alleppey", "Munnar"],
//       couponCode: "2025",
//       availability: true,
//       image: "p3.jpeg",
//     },
//     {
//       id: "4",
//       name: "Himalayan Adventure",
//       price: 40000,
//       destinations: ["Manali", "Leh", "Ladakh"],
//       couponCode: "2025",
//       availability: true,
//       image: "p4.jpeg",
//     },
//     {
//       id: "5",
//       name: "Rajasthan Royal Heritage",
//       price: 45000,
//       destinations: ["Jaipur", "Jodhpur", "Udaipur"],
//       couponCode: "2025",
//       availability: true,
//       image: "p5.jpeg",
//     },
//     {
//       id: "6",
//       name: "North East Delight",
//       price: 50000,
//       destinations: ["Guwahati", "Shillong", "Kaziranga"],
//       couponCode: "2025",
//       availability: true,
//       image: "p6.jpeg",
//     },
//     {
//       id: "7",
//       name: "Tamil Nadu Temple Tour",
//       price: 22000,
//       destinations: ["Chennai", "Madurai", "Rameswaram"],
//       couponCode: "2025",
//       availability: true,
//       image: "p7.jpeg",
//     },
//     {
//       id: "8",
//       name: "Andaman Island Escape",
//       price: 60000,
//       destinations: ["Port Blair", "Havelock Island", "Neil Island"],
//       couponCode: "2025",
//       availability: true,
//       image: "p8.jpeg",
//     },
//     {
//       id: "9",
//       name: "Sikkim & Darjeeling Scenic Tour",
//       price: 38000,
//       destinations: ["Gangtok", "Pelling", "Darjeeling"],
//       couponCode: "2025",
//       availability: true,
//       image: "p9.jpeg",
//     },
//     {
//       id: "10",
//       name: "Spiritual Varanasi Tour",
//       price: 18000,
//       destinations: ["Varanasi", "Sarnath"],
//       couponCode: "2025",
//       availability: true,
//       image: "p10.jpeg",
//     },
//     {
//       id: "11",
//       name: "Maharashtra Forts & Caves",
//       price: 27000,
//       destinations: ["Mumbai", "Ajanta", "Ellora"],
//       couponCode: "2025",
//       availability: true,
//       image: "p11.jpeg",
//     },
//     {
//       id: "12",
//       name: "Uttarakhand Nature Trail",
//       price: 32000,
//       destinations: ["Rishikesh", "Mussoorie", "Nainital"],
//       couponCode: "2025",
//       availability: true,
//       image: "p12.jpeg",
//     },
//     {
//       id: "13",
//       name: "Punjab Cultural Journey",
//       price: 26000,
//       destinations: ["Amritsar", "Ludhiana", "Patiala"],
//       couponCode: "2025",
//       availability: true,
//       image: "p13.jpeg",
//     },
//     {
//       id: "14",
//       name: "Meghalaya Rainforest Experience",
//       price: 42000,
//       destinations: ["Shillong", "Cherrapunji", "Mawsynram"],
//       couponCode: "2025",
//       availability: true,
//       image: "p14.jpeg",
//     },
//     {
//       id: "15",
//       name: "Madhya Pradesh Wildlife Safari",
//       price: 55000,
//       destinations: ["Kanha", "Bandhavgarh", "Pench"],
//       couponCode: "2025",
//       availability: true,
//       image: "p15.jpeg",
//     },
//   ];

//  packages.forEach((item) => {
//   let news = new Package({
//     name: item.name,
//     price: item.price,
//     image: item.image,
//     destinations: item.destinations,
//     availability:item.availability
//   });

//   news.save();
//  });
//  res.send("Done")

// })
app.listen(PORT, () => {
  connectDB();
  console.log("App is up and running");
});
