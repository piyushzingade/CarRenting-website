import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../lib/config";

// Define the Car interface
interface Car {
  id: string;
  name: string;
  type: "economy" | "premium" | "luxury";
  price: number;
  description: string;
  availability: boolean;
  image: string;
}

export default function DetailPage() {
  const { id } = useParams<{ id: string }>(); // Get car ID from the URL
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get<Car>(`${BACKEND_URL}/cars/${id}`);
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
    return <p>Loading...</p>;
  }

  if (error || !car) {
    return <p className="text-red-500">{error || "Car not found."}</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-3xl mx-auto">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800">{car.name}</h1>
        <p className="text-gray-600 capitalize">Type: {car.type}</p>
        <p className="text-gray-600">Price: ₹{car.price.toLocaleString()}</p>
        <p className="text-gray-600 mt-4">{car.description}</p>
        <p
          className={`mt-2 text-lg font-medium ${
            car.availability ? "text-green-600" : "text-red-600"
          }`}
        >
          {car.availability ? "Available" : "Unavailable"}
        </p>
        <button
          className="bg-blue-600 text-white px-6 py-3 mt-6 rounded-lg w-full hover:bg-blue-700"
          onClick={() => alert(`Booking ${car.name} is in progress.`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
