import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openAccount = () => {
    console.log("Account button clicked");
  };

  return (
    <header className="flex justify-between items-center border-b-2 shadow-xl border-gray-100 px-5">
      {/* Logo */}
      <div className="p-4">
        <h1 className="text-blue-500 font-bold text-2xl">CarRent</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex justify-between items-center gap-4">
        <div
          onClick={() => navigate("/")}
          className="hover:cursor-pointer hover:underline"
        >
          Home
        </div>
        <div
          onClick={() => navigate("/cars")}
          className="hover:cursor-pointer hover:underline"
        >
          Cars
        </div>
        <div
          onClick={() => navigate("/packages")}
          className="hover:cursor-pointer hover:underline"
        >
          Tour Packages
        </div>
        <div className="hover:cursor-pointer hover:underline">Offer</div>
        <div className="hover:cursor-pointer hover:underline">Contact</div>
      </div>

      {/* Right Section */}
      <div className="flex justify-between items-center gap-5">
        {/* Search Icon (Hidden on Small Screens) */}
        <div className="hidden sm:block hover:cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        {/* Account Icon */}
        <div className="hover:cursor-pointer" onClick={openAccount}>
          <FontAwesomeIcon icon={faUser} />
        </div>

        {/* Book Now Button (Hidden on Small Screens) */}
        <div className="hidden sm:block pr-3">
          <button className="bg-white border border-gray-600 hover:bg-blue-600 hover:text-white p-2 rounded-2xl">
            Book Now
          </button>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="sm:hidden flex items-center">
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl hover:cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Dropdown Menu (Visible when Hamburger Menu is clicked) */}
      {menuOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-lg rounded-lg p-4 z-50">
          <div
            onClick={() => navigate("/")}
            className="hover:cursor-pointer hover:underline mb-2"
          >
            Home
          </div>
          <div
            onClick={() => navigate("/cars")}
            className="hover:cursor-pointer hover:underline mb-2"
          >
            Cars
          </div>
          <div
            onClick={() => navigate("/packages")}
            className="hover:cursor-pointer hover:underline mb-2"
          >
            Tour Packages
          </div>
          <div className="hover:cursor-pointer hover:underline mb-2">Offer</div>
          <div className="hover:cursor-pointer hover:underline mb-2">
            Contact
          </div>
          <div
            className="hover:cursor-pointer text-blue-500 font-bold"
            onClick={openAccount}
          >
            Account
          </div>
        </div>
      )}
    </header>
  );
}
