import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../lib/config";



// Define categories
const categories = ["All Cars", "SUV", "Luxury", "Sedan", "Budget"];

export default function FeaturedCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All Cars");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<Car[]>(`${BACKEND_URL}/cars`);
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  const filteredCars =
    activeCategory === "All Cars"
      ? cars.slice(0, 3)
      : cars.filter((car) => car.category === activeCategory).slice(0, 3);

  return (
    <section className="py-12 px-6 text-center bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-950">🚗 Featured Cars</h2>
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
            key={car.id}
            className="bg-white shadow-xl rounded-lg p-5 hover:shadow-2xl transition-all cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => navigate(`/car/${car.id}`)}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="flex justify-between items-center mt-4">
              <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  car.availability ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {car.availability ? "Available" : "Booked"}
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
                car.availability
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={!car.availability}
              whileHover={{ scale: car.availability ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              {car.availability ? "Book Now" : "Unavailable"}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.button
        className="mt-8 px-6 py-3 bg-white text-blue-600 font-bold rounded-full shadow-md hover:bg-gray-200 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/cars")}
      >
        View All Cars →
      </motion.button>
    </section>
  );
}
