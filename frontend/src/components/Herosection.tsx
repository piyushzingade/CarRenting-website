import { FaShieldAlt, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Herosection() {
  const navigate  = useNavigate()
  return (

    <div className="bg-[#deecfe] max-h-screen p-6">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
        {/* Left Section */}
        <div className="md:w-1/2">
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
            className="bg-white mt-8 p-6 shadow-lg rounded-xl flex flex-wrap md:flex-nowrap gap-4 items-center"
          >
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select className="border rounded-lg p-3 text-gray-600 w-full">
                <option>Select Location</option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
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
            <button onClick={()=> navigate("/cars")} className="bg-blue-600 text-white px-6 py-3  mt-5 rounded-lg shadow-md w-full md:w-auto hover:bg-blue-700 hover:cursor-pointer">
              Search Cars
            </button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex flex-wrap gap-6 text-center"
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
        <div className="md:w-1/2 relative mt-16 md:mt-0">
          {/* Card 1 */}

          {/* Car Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="rounded-lg flex justify-center items-center"
          >
            <img
              src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20231103174155/new-Tata-Safari.jpg"
              alt="Car"
              className="w-full md:w-3/4 rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white shadow-lg p-4 rounded-lg absolute bottom-0 left-0 transform translate-y-12 translate-x-12"
          >
            <FaShieldAlt className="text-blue-600 text-3xl" />
            <div>
              <h3 className="font-bold text-gray-800">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">All cars sanitized</p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-white shadow-lg p-4 rounded-lg absolute top-0 right-0 transform -translate-y-6 -translate-x-8"
          >
            <FaHeadset className="text-blue-600 text-3xl" />
            <div>
              <h3 className="font-bold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always available</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
