import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { BACKEND_URL } from "../lib/config";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  const openAccount = () => {
    navigate("/user");
    // const response = await axios.get(`${BACKEND_URL}/user/profile`)
    // const data  = response.data.user;
    // return data;
  };

  return (
    <div className=" flex justify-between items-center border-b-2 shadow-xl border-gray-100 px-5">
      <div className="p-4 ">
        <h1 className="text-blue-500 font-bold text-2xl">CarRent</h1>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="hover:cursor-pointer hover:underline">Home </div>
        <div className="hover:cursor-pointer hover:underline">Cars</div>
        <div className="hover:cursor-pointer hover:underline">
          Tour Packages
        </div>
        <div className="hover:cursor-pointer hover:underline">Offer</div>
        <div className="hover:cursor-pointer hover:underline">Contact</div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="hover:cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="hover:cursor-pointer" onClick={openAccount}>
          <FontAwesomeIcon icon={faUser} className="light" />
        </div>
        <div className="pr-3">
          <button className="bg-white border border-gray-600 hover:bg-blue-600 hover:text-white p-2 rounded-2xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
