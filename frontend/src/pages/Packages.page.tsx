import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../lib/config";



export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get<Package[]>(`${BACKEND_URL}/packages`);
        setPackages(response.data);
      } catch (err: any) {
        console.error("Fetch Error:", err);
        setError("Failed to fetch packages. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 flex items-center justify-center p-20 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Our Packages 📦
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {packages.map((pack) => (
          <motion.div
            key={pack._id} // ✅ Fixed unique key warning
            className="bg-white shadow-lg p-5 rounded-xl hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer"
            onClick={() => navigate(`/packages/${pack._id}`)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={`/${pack.image}`}
              alt={pack.name}
              className="w-full h-56 object-cover rounded-lg mb-4 shadow-md"
              style={{
                objectFit: "cover",
                aspectRatio: "16/9",
                maxHeight: "200px",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => (e.currentTarget.src = "/placeholder-image.jpg")} // ✅ Fallback image
            />

            <h2 className="text-2xl font-bold text-gray-800">{pack.name}</h2>
            <p className="text-gray-600 mt-2">{pack.description}</p>
            <p className="text-lg text-gray-800 font-semibold mt-2">
              Price:{" "}
              <span className="text-green-600">
                ₹{pack.price.toLocaleString()}
              </span>
            </p>

            {pack.couponCode && (
              <motion.div
                className="mt-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md font-semibold w-fit"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Coupon Code:{" "}
                <span className="font-bold">{pack.couponCode}</span>
              </motion.div>
            )}

            <motion.p
              className={`mt-4 text-lg font-medium ${
                pack.availability ? "text-green-600" : "text-red-600"
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {pack.availability ? "Available ✅" : "Unavailable ❌"}
            </motion.p>

            {pack.availability ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 mt-4 rounded-lg w-full font-semibold tracking-wide shadow-md hover:from-blue-600 hover:to-purple-600 transition-all hover:cursor-pointer"
                onClick={(e) => {
                  navigate("/book");
                  e.stopPropagation(); // Prevent parent div click event
                }}
              >
                Book Now 🚀
              </motion.button>
            ) : (
              <button className="bg-gray-600 text-white px-6 py-2 mt-4 rounded-lg w-full font-semibold cursor-not-allowed">
                Not Available
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
