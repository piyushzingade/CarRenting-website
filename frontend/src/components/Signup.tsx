import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BACKEND_URL } from "../lib/config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/signup`, formData);
      toast.success("Signup successful: " + response.data.message);
    } catch (error) {
      toast.error("Error during signup");
    }
  };

  return (
    <div className="flex w-[900px] shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/2 bg-blue-500 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">Come join us!</h1>
        <p className="text-center mb-6">
          We are so excited to have you here. If you haven't already, create an
          account to get access to exclusive offers, rewards, and discounts.
        </p>
        <button onClick={()=>{
          navigate("/signin")
        }} className="mt-4 text-white bg-blue-600 px-6 py-2 rounded-full">
          Already have an account? <span className="hover:underline">Signin</span>.
        </button>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-8">Signup</h2>
        <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}