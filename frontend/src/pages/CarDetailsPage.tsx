import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../lib/config";



export default function CarDetailPage() {
  const { id } = useParams<{ id: string }>(); // Get car ID from the URL
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from storage
        const response = await axios.get<Car>(`${BACKEND_URL}/cars/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in request
          },
        });
        setCar(response.data);
      } catch (err) {
        setError("Failed to fetch car details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-xl font-semibold mt-10">Loading...</p>
    );
  }

  if (error || !car) {
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        {error || "Car not found."}
      </p>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-xl p-6 rounded-2xl max-w-3xl mx-auto w-full"
      >
        <motion.img
          src={car.image}
          alt={car.name}
          className="w-full h-64 object-cover rounded-xl mb-4 shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          {car.name}
        </h1>
        <p className="text-lg text-gray-600 capitalize">
          Type: <span className="font-semibold">{car.type}</span>
        </p>
        <p className="text-lg text-gray-700 font-semibold">
          Price:{" "}
          <span className="text-green-600">₹{car.price.toLocaleString()}</span>
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed">{car.description}</p>

        <motion.p
          className={`mt-4 text-lg font-medium ${
            car.availability ? "text-green-600" : "text-red-600"
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {car.availability ? "Available" : "Unavailable"}
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 mt-6 rounded-xl w-full font-semibold tracking-wide shadow-md hover:from-blue-600 hover:to-purple-600 transition-all"
          onClick={() => alert(`Booking ${car.name} is in progress.`)}
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  );
}
