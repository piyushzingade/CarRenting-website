import { useState } from "react";
import axios from "axios";

export function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/signin",
        formData
      );
      alert("Signin successful: " + response.data.token);
    } catch (error) {
      alert("Error during signin");
    }
  };

  return (
    <div className="flex w-[900px] shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/2 text-black flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-8">Signin</h2>
        <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 text-black border rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border  text-black rounded"
          />
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white rounded"
          >
            Signin
          </button>
        </form>
      </div>
      <div className="w-1/2 bg-green-500 text-white flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome back!</h1>
        <p>
          It's great to see you again. We hope you had a safe and enjoyable time
          away.
        </p>
      </div>
    </div>
  );
}
