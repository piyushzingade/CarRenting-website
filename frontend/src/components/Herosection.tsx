
import { FaShieldAlt, FaHeadset, FaMapMarkerAlt } from "react-icons/fa";

export default function Herosection() {
  return (
    <div className="bg-[#deecfe] min-h-screen p-6">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Explore India With Our{" "}
            <span className="text-blue-600">Premium Cars</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Rent the perfect car for your next adventure. Whether it's a weekend
            getaway or a week-long tour package to Manali, Punjab, or Tamil
            Nadu.
          </p>

          {/* Search Form */}
          <div className="bg-white mt-8 p-6 shadow-lg rounded-xl flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <select className="border rounded-lg p-2 flex-1 text-gray-600">
                <option>
                  <FaMapMarkerAlt className="text-blue-600" />
                  Select Location
                </option>
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Bangalore</option>
              </select>
            </div>
            <input
              type="date"
              className="border rounded-lg p-2 text-gray-600 w-full sm:w-auto"
            />
            <input
              type="date"
              className="border rounded-lg p-2 text-gray-600 w-full sm:w-auto"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">
              Search Cars
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-6 flex flex-wrap gap-6 text-center">
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
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 relative">
          {/* Card 1 */}
          <div className="bg-white shadow-lg p-4 rounded-lg absolute bottom-0 left-0 transform -translate-y-8 -translate-x-8">
            <FaShieldAlt className="text-blue-600 text-3xl" />
            <div>
              <h3 className="font-bold text-gray-800">Safe & Secure</h3>
              <p className="text-gray-600 text-sm">All cars sanitized</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg p-4 rounded-lg absolute top-0 right-0 transform -translate-y-8 translate-x-8">
            <FaHeadset className="text-blue-600 text-3xl" />
            <div>
              <h3 className="font-bold text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Always available</p>
            </div>
          </div>

          {/* Car Image */}
          <div className="shadow-inner rounded-lg p-8 flex justify-center items-center">
            <img
              src="https://d2m3nfprmhqjvd.cloudfront.net/blog/20231103174155/new-Tata-Safari.jpg"
              alt="Car"
              className="w-3/4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
