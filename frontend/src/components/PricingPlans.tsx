import { useState } from "react";

const plans = [
  {
    name: "Economy",
    price: "₹1,500",
    features: [
      "Hatchback Cars",
      "150km/day limit",
      "Basic Insurance",
      "24/7 Roadside Assistance",
    ],
    color: "bg-blue-600",
    buttonColor:
      "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Premium",
    price: "₹3,000",
    features: [
      "SUV/Sedan Cars",
      "Unlimited kilometers",
      "Comprehensive Insurance",
      "Free Driver",
    ],
    color: "bg-purple-600",
    buttonColor:
      "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
    badge: "Popular",
  },
  {
    name: "Luxury",
    price: "₹5,000",
    features: [
      "Luxury Cars",
      "Unlimited kilometers",
      "Premium Insurance",
      "Professional Chauffeur",
    ],
    color: "bg-gray-900",
    buttonColor:
      "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white",
  },
];

const benefits = [
  { title: "Full Insurance", description: "Comprehensive coverage included" },
  { title: "Free Cancellation", description: "Up to 24 hours before pickup" },
  { title: "24/7 Support", description: "Always there to help" },
];

export default function PricingPlans() {
  const [isDailyRental, setIsDailyRental] = useState(true);

  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-bold">Transparent Pricing Plans</h2>
      <p className="text-gray-500">
        Choose the perfect rental plan that suits your needs
      </p>

      <div className="flex justify-center items-center gap-4 my-6">
        <span>Daily Rental</span>
        <div
          className="relative w-12 h-6 bg-gray-300 rounded-full flex items-center px-1 cursor-pointer"
          onClick={() => setIsDailyRental(!isDailyRental)}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              isDailyRental ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </div>
        <span>Package Tours</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-lg shadow-lg p-6 bg-white"
          >
            <div
              className={`${plan.color} text-white py-4 rounded-t-lg font-semibold text-lg`}
            >
              {plan.name}
              {plan.badge && (
                <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold mt-4">
              {plan.price}
              <span className="text-gray-500 text-sm">/day</span>
            </p>
            <ul className="text-gray-500 text-sm mt-4 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index}>✅ {feature}</li>
              ))}
            </ul>
            <button
              className={`mt-4 py-2 w-full rounded-md border ${plan.buttonColor}`}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-12">Additional Benefits</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center">
            <p className="font-semibold text-lg">{benefit.title}</p>
            <p className="text-gray-500 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
