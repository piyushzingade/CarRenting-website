
const TourPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Magical Manali",
      description:
        "Experience the beauty of snow-capped mountains and adventure sports",
      days: "4 Days",
      price: "₹24,999",
      oldPrice: "₹29,999",
      features: ["SUV Included", "Luxury Stay", "All Meals"],
    },
    {
      id: 2,
      name: "Punjab Heritage Tour",
      description: "Explore the rich culture and heritage of Punjab",
      days: "7 Days",
      price: "₹34,999",
      oldPrice: "₹39,999",
      features: ["Sedan Included", "Premium Stay", "All Meals"],
    },
    {
      id: 3,
      name: "Tamil Nadu Temple Tour",
      description: "Visit ancient temples and cultural landmarks",
      days: "5 Days",
      price: "₹29,999",
      oldPrice: "₹35,999",
      features: ["Premium Car", "4-Star Stay", "All Meals"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Explore India with Our Tour Packages
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Discover the best destinations across India with our carefully curated
          tour packages
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">{pkg.name}</h3>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {pkg.days}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{pkg.description}</p>

              <ul className="space-y-2 mb-4">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <i className="fas fa-check-circle text-blue-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xl font-bold text-blue-600 mr-2">
                    {pkg.price}
                  </span>
                  <span className="line-through text-gray-400 text-sm">
                    {pkg.oldPrice}
                  </span>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-flex items-center">
            Explore All Packages
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
