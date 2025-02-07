import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Manali Trip",
    review:
      "Amazing experience with CarRent! The SUV was perfect for our Manali trip, and their service was exceptional. Will definitely book again!",
    rating: 5,
    time: "2 weeks ago",
  },
  {
    name: "Priya Patel",
    location: "Punjab Tour",
    review:
      "The car was clean and well-maintained. Customer support was available 24/7. Made our Punjab trip memorable!",
    rating: 5,
    time: "1 month ago",
  },
  {
    name: "Anand Kumar",
    location: "Tamil Nadu Package",
    review:
      "Best car rental service! The booking process was smooth, and the package deal for Tamil Nadu was worth every penny.",
    rating: 5,
    time: "3 weeks ago",
  },
];

const stats = [
  { value: "4.8/5", label: "Average Rating" },
  { value: "10K+", label: "Happy Customers" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "5K+", label: "Reviews" },
];

export default function Testimonial() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-bold">What Our Customers Say</h2>
      <p className="text-gray-500">
        Real experiences from our satisfied customers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-lg p-4 bg-white text-left"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.location}</p>
              </div>
            </div>
            <div className="flex mt-2 text-yellow-500">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-gray-500 text-sm italic mt-2">
              "{review.review}"
            </p>
            <p className="text-gray-400 text-xs mt-2">{review.time}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 bg-gray-100 p-6 rounded-lg">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-blue-600 text-xl font-bold">{stat.value}</p>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-sm mt-6">
        Join thousands of satisfied customers who trust our service
      </p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full">
        Book Your Journey Now →
      </button>
    </section>
  );
}
