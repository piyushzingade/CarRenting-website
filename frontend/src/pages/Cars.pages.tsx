import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { BACKEND_URL } from "../lib/config";


// Define the Car interface based on your backend schema
interface Car {
  id: string;
  name: string;
  type: "economy" | "premium" | "luxury";
  price: number;
  description: string;
  availability: boolean;
  image: string; // Assuming carsData has an image property
}

export default function CarsPages() {
  const [cars, setCars] = useState<Car[]>([]); // State to store car data
  const [loading, setLoading] = useState<boolean>(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error handling
  const navigate = useNavigate(); // Navigation hook
  
  
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
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen min-w-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer"
            onClick={() => navigate(`/car/${car.id}`)} // Navigate to detail page on card click
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-gray-600 capitalize">Type: {car.type}</p>
            <p className="text-gray-600">
              Price: ₹{car.price.toLocaleString()}
            </p>
            <p
              className={`mt-2 text-sm font-medium ${
                car.availability ? "text-green-600" : "text-red-600"
              }`}
            >
              {car.availability ? "Available" : "Unavailable"}
            </p>
            {car.availability ? (
              <button
                className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking "Book Now"
                }}
              >
                Book Now
              </button>
            ) : (
              <button className="bg-gray-600 text-white px-4 py-2 mt-4 rounded-lg w-full hover:cursor-not-allowed">
                Not Available
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
