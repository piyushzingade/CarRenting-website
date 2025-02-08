import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cars = [
  {
    name: "Toyota Fortuner",
    price: 3000,
    seats: "7 Seats",
    transmission: "Automatic",
    fuel: "Diesel",
    status: "Available",
    category: "SUV",
    img: "https://source.unsplash.com/400x300/?suv,car",
  },
  {
    name: "Honda City",
    price: 2000,
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    status: "Available",
    category: "Sedan",
    img: "https://source.unsplash.com/400x300/?sedan,car",
  },
  {
    name: "Mercedes C-Class",
    price: 5000,
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Booked",
    category: "Luxury",
    img: "https://source.unsplash.com/400x300/?luxury,car",
  },
];

const categories = ["All Cars", "SUV", "Luxury", "Sedan", "Budget"];

export default function FeaturedCars() {
  const [activeCategory, setActiveCategory] = useState("All Cars");
  const navigate = useNavigate();

  // Filter cars based on selected category
  const filteredCars =
    activeCategory === "All Cars"
      ? cars
      : cars.filter((car) => car.category === activeCategory);

  return (
    <section className="py-12 px-6 text-center bg-gray-100">
      <h2 className="text-4xl/2 font-bold text-gray-950">
        🚗 Featured Cars
      </h2>
      <p className="text-gray-950 text-lg mt-2">
        Choose from our selection of premium vehicles for your next journey
      </p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 my-6">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeCategory === category
                ? "bg-white text-blue-600 shadow-md"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Cars Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredCars.map((car, index) => (
          <motion.div
            key={car.name}
            className="bg-white shadow-xl rounded-lg p-5 hover:shadow-2xl transition-all cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }} // Subtle floating effect
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  car.status === "Available" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {car.status}
              </span>
            </div>
            <p className="text-blue-600 font-semibold text-lg">
              ₹{car.price}/day
            </p>
            <p className="text-gray-600 text-sm">
              {car.seats} • {car.transmission} • {car.fuel}
            </p>

            <motion.button
              className={`w-full mt-4 py-2 rounded-md font-semibold transition-all ${
                car.status === "Available"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={car.status !== "Available"}
              whileHover={{ scale: car.status === "Available" ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              {car.status === "Available" ? "Book Now" : "Unavailable"}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/cars')}
      >
        View All Cars →
      </motion.button>
    </section>
  );
}
