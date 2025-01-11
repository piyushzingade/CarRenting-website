// Updated Home Page UI with animations and sections for products, services, testimonials, and footer.
// Frameworks: Next.js, TypeScript, Tailwind CSS, and Framer Motion.
"use client";
import Appbar from "@/components/Appbar";
// File: pages/index.tsx
import { motion } from "framer-motion";
import Image from "next/image";

// const products = [
//   {
//     name: "Disposable Plate",
//     image: "/disposable-plate.jpg",
//     detail: "High-quality disposable plates.",
//   },
//   {
//     name: "Glass",
//     image: "/glass.jpg",
//     detail: "Durable and recyclable glasses.",
//   },
//   {
//     name: "Bowl",
//     image: "/bowl.jpg",
//     detail: "Perfect for serving soups and snacks.",
//   },
//   {
//     name: "Hinged Box",
//     image: "/hinged-box.jpg",
//     detail: "Ideal for food storage.",
//   },
//   {
//     name: "Garbage Bag",
//     image: "/garbage-bag.jpg",
//     detail: "Eco-friendly garbage bags.",
//   },
//   {
//     name: "Ripple Cup",
//     image: "/ripple-cup.jpg",
//     detail: "Stylish cups for hot beverages.",
//   },
//   {
//     name: "Cling Films",
//     image: "/cling-films.jpg",
//     detail: "Perfect for food wrapping.",
//   },
// ];

// const services = [
//   "Malls",
//   "Hotels",
//   "Restaurants",
//   "Homes",
//   "Catering Businesses",
// ];

// const testimonials = [
//   {
//     name: "John Doe",
//     feedback:
//       "The best packaging solutions I have ever used. Highly recommend!",
//   },
//   {
//     name: "Jane Smith",
//     feedback: "Exceptional quality and customer service.",
//   },
//   {
//     name: "Michael Lee",
//     feedback: "Wide variety of products with great durability.",
//   },
// ];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      {/* <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          MakeEasyPackSolution
        </h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#products" className="text-gray-700 hover:text-blue-500">
            Products
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-500">
            Testimonials
          </a>
        </nav>
      </header> */}

      {/* Hero Section */}
      {/* <motion.section
        className="bg-blue-100 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-center text-4xl font-bold text-blue-600 mb-6">
          Welcome to MakeEasyPackSolution
        </h2>
        <div className="flex justify-center items-center space-x-4">
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-lg font-bold text-gray-700 mt-2">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.section> */}

      {/* Products Section */}
      {/* <section id="products" className="py-10 px-6">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">
          New Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-lg font-bold text-gray-700 mt-4">
                {product.name}
              </h3>
              <p className="text-gray-500 mt-2">{product.detail}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section id="services" className="bg-blue-50 py-10 px-6">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">
          Where We Serve
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-10 px-6">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-500">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-bold text-gray-700 mt-4">
                - {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-blue-600 text-white py-6 text-center">
        <p>Have any queries or want to contact us?</p>
        <div className="space-x-4 mt-2">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            WhatsApp
          </a>
          <a
            href="mailto:info@makeeasypacksolution.com"
            className="hover:underline"
          >
            Email Us
          </a>
          <a
            href="https://instagram.com/makeeasypacksolution"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Instagram
          </a>
        </div>
      </footer> */}
      <Appbar/>
    </div>
  );
}
