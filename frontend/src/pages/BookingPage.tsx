import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaCar, FaCalendarAlt, FaMoneyBillWave, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { BACKEND_URL } from '../lib/config';

interface Booking {
  _id: string;
  userId: {
    _id: string;
    name: string;
    email: string;
  };
  carId: {
    _id: string;
    name: string;
    model: string;
    price: number;
  };
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: string;
}

interface Car {
  _id: string;
  name: string;
  model: string;
  price: number;
}

export default function BookingPage() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Get user ID from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const userData = JSON.parse(user);
        setUserId(userData._id);
      } catch (e) {
        console.error('Error parsing user data:', e);
      }
    }
    
    fetchBookings();
    fetchCars();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to view bookings');
        return;
      }
      
      const response = await axios.get(`${BACKEND_URL}/bookings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError('Failed to fetch bookings. Please try again later.');
    }
  };

  const fetchCars = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/cars`);
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
      setError('Failed to fetch cars. Please try again later.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCar || !startDate || !endDate) {
      setError('Please fill in all fields');
      return;
    }

    if (!userId) {
      setError('Please login to create a booking');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please login to create a booking');
        return;
      }
      
      const response = await axios.post(
        `${BACKEND_URL}/bookings`,
        {
          userId: userId,
          carId: selectedCar,
          startDate: new Date(startDate).toISOString(),
          endDate: new Date(endDate).toISOString(),
          totalPrice: calculateTotalPrice(),
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setSuccess('Booking created successfully!');
      setError('');
      fetchBookings();
      
      // Reset form
      setSelectedCar('');
      setStartDate('');
      setEndDate('');
    } catch (error) {
      setError('Error creating booking. Please try again.');
      console.error('Error:', error);
    }
  };

  const calculateTotalPrice = () => {
    if (!selectedCar || !startDate || !endDate) return 0;
    const car = cars.find(c => c._id === selectedCar);
    if (!car) return 0;
    
    const days = Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24));
    return car.price * days;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Book a Car</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
          <FaExclamationCircle className="mr-2" />
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex items-center">
          <FaCheckCircle className="mr-2" />
          {success}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Car
              </label>
              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a car</option>
                {cars.map((car) => (
                  <option key={car._id} value={car._id}>
                    {car.name} - {car.model} (${car.price}/day)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="flex items-center text-xl font-semibold text-gray-800">
              <FaMoneyBillWave className="mr-2 text-green-600" />
              Total Price: ${calculateTotalPrice()}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
          >
            Create Booking
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Bookings</h2>

      {bookings.length === 0 ? (
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-gray-600">You don't have any bookings yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div key={booking._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaCar className="text-blue-600 text-2xl mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{booking.carId.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-2">Model: {booking.carId.model}</p>
                
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-gray-500 mr-2" />
                  <p className="text-gray-600">
                    {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex items-center mb-2">
                  <FaMoneyBillWave className="text-green-600 mr-2" />
                  <p className="text-gray-600">Total Price: ${booking.totalPrice}</p>
                </div>
                
                <div className="mt-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    booking.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : booking.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-3">
                <button
                  onClick={() => navigate(`/bookings/${booking._id}`)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
