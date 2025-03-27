import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../lib/config";

// Define the Package interface


export default function PackageDetailPage() {
  const { id } = useParams<{ id: string }>(); // Get package ID from the URL
  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const token = localStorage.getItem("token"); // Get token from storage
        const response = await axios.get<Package>(
          `${BACKEND_URL}/packages/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Send token in request
            },
          }
        );
        setPkg(response.data);
      } catch (err) {
        setError("Failed to fetch package details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackageDetails();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-xl font-semibold mt-10 text-white">
        Loading...
      </p>
    );
  }

  if (error || !pkg) {
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        {error || "Package not found."}
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl p-8 rounded-3xl max-w-3xl mx-auto w-full"
      >
        <motion.img
          src={pkg.image.startsWith("http") ? pkg.image : `/${pkg.image}`} // ✅ Handle image paths properly
          alt={pkg.name}
          className="w-full h-72 object-cover rounded-xl mb-6 shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />

        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          {pkg.name}
        </h1>
        <p className="text-lg text-gray-700 font-semibold">
          Price:{" "}
          <span className="text-green-600 text-2xl">
            ₹{pkg.price.toLocaleString()}
          </span>
        </p>

        <p className="text-gray-600 mt-4 leading-relaxed">{pkg.description}</p>

        {pkg.couponCode && (
          <motion.div
            className="mt-4 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg text-lg font-semibold w-fit"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Coupon Code: <span className="font-bold">{pkg.couponCode}</span>
          </motion.div>
        )}

        <motion.p
          className={`mt-5 text-lg font-medium ${
            pkg.availability ? "text-green-600" : "text-red-600"
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {pkg.availability ? "Available ✅" : "Unavailable ❌"}
        </motion.p>

        {pkg.availability ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold tracking-wide shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all"
            onClick={() => alert(`Booking ${pkg.name} is in progress.`)}
          >
            Book Now 🚀
          </motion.button>
        ) : (
          <button className="mt-6 w-full bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold cursor-not-allowed">
            Not Available
          </button>
        )}
      </motion.div>
    </div>
  );
}
