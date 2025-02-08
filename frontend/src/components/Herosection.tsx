import { motion } from "framer-motion";
import { FaHeadset, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Herosection() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#deecfe] min-h-screen flex items-center justify-center p-6">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight"
          >
            Explore India With Our{" "}
            <span className="text-blue-600">Premium Cars</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-gray-600"
          >
            Rent the perfect car for your next adventure. Whether it's a weekend
            getaway or a week-long tour package to Manali, Punjab, or Tamil
            Nadu.
          </motion.p>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white mt-8 p-6 shadow-lg rounded-xl flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between"
          >
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select className="border rounded-lg p-3 text-gray-600 w-full">
                <option className="text-center p-4">Select Location</option>
                <option className="text-center">Delhi</option>
                <option className="text-center">Mumbai</option>
                <option className="text-center">Bangalore</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="border rounded-lg p-3 text-gray-600 w-full"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                className="border rounded-lg p-3 text-gray-600 w-full"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <button
              onClick={() => navigate("/cars")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md w-full lg:w-auto hover:bg-blue-700 hover:cursor-pointer mt-5 flex items-center justify-center"
            >
              Search Cars
            </button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-6 text-center justify-center lg:justify-start"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Cars Available</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">50+</h3>
              <p className="text-gray-600">Tour Packages</p>
            </div>
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="rounded-lg overflow-hidden shadow-lg bg-[#deecfe] relative "
          >
            {/* Central Car Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20231103174155/new-Tata-Safari.jpg"
                alt="Car"
                className="w-auto h-full object-contain"
              />
            </div>

            {/* Bottom Left Card - Safe & Secure */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white shadow-lg p-4 rounded-lg absolute bottom-0 left-0 flex items-center gap-3"
            >
              <FaShieldAlt className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-800">Safe & Secure</h3>
                <p className="text-gray-600 text-sm">All cars sanitized</p>
              </div>
            </motion.div>

            {/* Top Right Card - 24/7 Support */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-white shadow-lg p-4 rounded-lg absolute top-0 right-0 flex items-center gap-3"
            >
              <FaHeadset className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-800">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Always available</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
