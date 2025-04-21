import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { BACKEND_URL } from "../lib/config";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  _id: string;
  itemId: string;
  itemType: "car" | "package";
  price: number;
}

interface Car {
  _id: string;
  name: string;
  price: number;
  image: string;
}

export default function OrdersPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get<{ cart: CartItem[] }>(
        `${BACKEND_URL}/user/cart`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setCart(response.data.cart);

      const carPromises = response.data.cart
        .filter((item) => item.itemType === "car")
        .map((item) => axios.get<Car>(`${BACKEND_URL}/cars/${item.itemId}`));

      const carResponses = await Promise.all(carPromises);
      setCars(carResponses.map((res) => res.data));
    } catch (err) {
      setError("Failed to fetch cart items.");
    } finally {
      setLoading(false);
    }
  };

  const confirmBooking = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${BACKEND_URL}/user/cart/confirm`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Booking confirmed!", { position: "top-right" });
      setCart([]); // Clear cart after confirmation
    } catch (err) {
      toast.error("Failed to confirm booking.", { position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Your Cart
      </h1>

      {loading && (
        <p className="text-center text-xl font-semibold">Loading...</p>
      )}
      {error && <p className="text-center text-red-500 text-xl">{error}</p>}

      {cars.map((car) => (
        <motion.div
          key={car._id}
          className="bg-white shadow-xl p-4 rounded-xl mx-auto w-full max-w-lg mb-4"
        >
          <h2 className="text-2xl font-bold">{car.name}</h2>
          <p className="text-lg">Price: ₹{car.price.toLocaleString()}</p>
        </motion.div>
      ))}

      {cart.length > 0 && (
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-xl w-full mt-4"
          onClick={confirmBooking}
        >
          Confirm Booking
        </button>
      )}
    </div>
  );
}
