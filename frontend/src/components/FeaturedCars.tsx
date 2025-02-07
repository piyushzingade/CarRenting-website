import { useState } from "react";

const cars = [
  {
    name: "Toyota Fortuner",
    price: "₹3,000/day",
    seats: "7 Seats",
    transmission: "Automatic",
    fuel: "Diesel",
    status: "Available",
  },
  {
    name: "Honda City",
    price: "₹2,000/day",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    status: "Available",
  },
  {
    name: "Mercedes C-Class",
    price: "₹5,000/day",
    seats: "5 Seats",
    transmission: "Automatic",
    fuel: "Petrol",
    status: "Booked",
  },
];

export default function FeaturedCars() {
  const [activeCategory, setActiveCategory] = useState("All Cars");

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-bold">Featured Cars</h2>
      <p className="text-gray-500">
        Choose from our selection of premium vehicles for your next journey
      </p>

      <div className="flex justify-center gap-4 my-6">
        {["All Cars", "SUV", "Luxury", "Sedan", "Budget"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car.name} className="border rounded-lg p-4 shadow-lg">
            <div className="flex justify-between items-center">
              <div className="text-gray-500 text-4xl">🚗</div>
              <span
                className={`px-3 py-1 rounded-full text-white text-sm ${
                  car.status === "Available" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {car.status}
              </span>
            </div>
            <h3 className="font-semibold mt-2">{car.name}</h3>
            <p className="text-blue-600 font-bold">{car.price}</p>
            <p className="text-gray-500 text-sm">
              {car.seats} • {car.transmission} • {car.fuel}
            </p>
            <button
              className={`w-full mt-4 py-2 rounded-md ${
                car.status === "Available"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={car.status !== "Available"}
            >
              {car.status === "Available"
                ? "Book Now"
                : "Currently Unavailable"}
            </button>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full">
        View All Cars →
      </button>
    </section>
  );
}
