import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../lib/config";



export default function CarsPages() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get<Car[]>(`${BACKEND_URL}/cars`);
        setCars(response.data);
      } catch (err) {
        setError("Failed to fetch car data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-xl font-semibold mt-10">Loading...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 text-xl mt-10">{error}</p>;
  }

  return (
    <div className="min-h-screen w-full bg-gray-100  p-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Available Cars 🚗
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {cars.map((car) => (
          <motion.div
            key={car.id}
            className="bg-white shadow-xl p-4 rounded-xl cursor-pointer transform transition duration-300 hover:scale-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/car/${car.id}`)}
          >
            <motion.img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
            <h2 className="text-2xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600 capitalize">Type: {car.type}</p>
            <p className="text-lg text-gray-700 font-semibold">
              Price:{" "}
              <span className="text-green-600">
                ₹{car.price.toLocaleString()}
              </span>
            </p>
            <motion.p
              className={`mt-2 text-lg font-medium ${
                car.availability ? "text-green-600" : "text-red-600"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {car.availability ? "Available" : "Unavailable"}
            </motion.p>
            {car.availability ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 mt-4 rounded-lg w-full font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                Book Now
              </motion.button>
            ) : (
              <button className="bg-gray-600 text-white px-4 py-2 mt-4 rounded-lg w-full cursor-not-allowed">
                Not Available
              </button>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
