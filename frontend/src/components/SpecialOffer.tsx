const offers = [
  {
    title: "Weekend Special",
    details: [
      "20% off on weekend car rentals",
      "Free fuel for first 100 km",
      "Complimentary car cleaning",
    ],
    code: "WEEKEND20",
    tag: "LIMITED TIME OFFER",
    tagColor: "bg-blue-600",
    badge: "Expires in 2 days",
    badgeColor: "bg-red-500",
    buttonColor: "bg-blue-600",
  },
  {
    title: "Diwali Package",
    details: [
      "30% off on luxury cars",
      "Free driver for 24 hours",
      "Insurance included",
    ],
    code: "DIWALI30",
    tag: "FESTIVAL SPECIAL",
    tagColor: "bg-purple-600",
    badge: "New Offer",
    badgeColor: "bg-green-500",
    buttonColor: "bg-purple-600",
  },
  {
    title: "Monthly Package",
    details: [
      "25% off on monthly bookings",
      "Free maintenance",
      "24/7 roadside assistance",
    ],
    code: "MONTHLY25",
    tag: "LONG TERM DEAL",
    tagColor: "bg-green-600",
    badge: "Popular",
    badgeColor: "bg-blue-500",
    buttonColor: "bg-green-600",
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="text-2xl font-bold">Special Offers</h2>
      <p className="text-gray-500">
        Exclusive deals and discounts on car rentals and tour packages
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {offers.map((offer) => (
          <div
            key={offer.code}
            className="border rounded-lg shadow-lg p-4 bg-white"
          >
            <div
              className={`text-white text-sm font-semibold px-4 py-2 ${offer.tagColor} rounded-t-md flex justify-between items-center`}
            >
              <span>{offer.tag}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs ${offer.badgeColor} text-white`}
              >
                {offer.badge}
              </span>
            </div>
            <h3 className="font-semibold mt-4 text-lg">{offer.title}</h3>
            <ul className="text-gray-500 text-sm mt-2 space-y-1">
              {offer.details.map((detail, index) => (
                <li key={index} className="flex items-center">
                  ✅ {detail}
                </li>
              ))}
            </ul>
            <div className="mt-4 bg-gray-100 p-2 rounded-md text-sm">
              <p className="text-gray-500">Use Code</p>
              <p className="font-bold text-lg text-blue-600">{offer.code}</p>
            </div>
            <button
              className={`w-full mt-4 py-2 rounded-md text-white ${offer.buttonColor}`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
