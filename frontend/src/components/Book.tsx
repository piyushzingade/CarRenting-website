import {
  FaCar,
  FaCalendarAlt,
  FaCreditCard,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset,
  FaTimesCircle,
} from "react-icons/fa";

const Book = () => {
  const steps = [
    {
      id: 1,
      icon: <FaCar className="text-blue-500 text-3xl" />,
      title: "Choose Your Car",
      description:
        "Select from our wide range of vehicles that best suits your needs",
    },
    {
      id: 2,
      icon: <FaCalendarAlt className="text-blue-500 text-3xl" />,
      title: "Pick Your Dates",
      description: "Select your pickup and return dates from the calendar",
    },
    {
      id: 3,
      icon: <FaCreditCard className="text-blue-500 text-3xl" />,
      title: "Make Payment",
      description: "Secure payment through multiple payment options",
    },
    {
      id: 4,
      icon: <FaCheckCircle className="text-blue-500 text-3xl" />,
      title: "Get Your Car",
      description: "Pick up your car or get it delivered to your location",
    },
  ];

  const benefits = [
    {
      id: 1,
      icon: <FaShieldAlt className="text-green-500 text-3xl" />,
      title: "Secure Booking",
      description:
        "Your payment and personal information are protected with advanced encryption",
    },
    {
      id: 2,
      icon: <FaHeadset className="text-blue-500 text-3xl" />,
      title: "24/7 Support",
      description:
        "Our customer support team is available round the clock to assist you",
    },
    {
      id: 3,
      icon: <FaTimesCircle className="text-purple-500 text-3xl" />,
      title: "Free Cancellation",
      description:
        "Cancel your booking up to 24 hours before pickup at no extra charge",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          How to Book Your Car
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Simple and hassle-free booking process in just a few steps
        </p>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
            >
              {step.icon}
              <h3 className="text-lg font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
            >
              {benefit.icon}
              <h3 className="text-lg font-bold mt-4 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-flex items-center">
            Book Your Car Now
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
