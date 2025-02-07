import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold">CarRent</h2>
          <p className="mt-2 text-sm">
            Your trusted partner for car rentals and tour packages across India.
            Experience comfort and reliability on every journey.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {[
              "About Us",
              "Our Cars",
              "Tour Packages",
              "Special Offers",
              "Blog",
              "Contact Us",
            ].map((link) => (
              <li key={link} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h3 className="text-white font-semibold">Popular Destinations</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {[
              "Manali Tours",
              "Punjab Heritage",
              "Tamil Nadu Temples",
              "Kerala Backwaters",
              "Rajasthan Desert",
            ].map((destination) => (
              <li key={destination} className="hover:text-white cursor-pointer">
                {destination}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold">Newsletter</h3>
          <p className="mt-2 text-sm">
            Subscribe to our newsletter for latest updates and offers
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-md bg-gray-800 text-white w-full focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
              ➤
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 CarRent. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white cursor-pointer">Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
