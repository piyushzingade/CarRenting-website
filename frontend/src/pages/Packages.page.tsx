import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../lib/config"
import { useNavigate } from "react-router-dom";



interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
  couponCode?: string;
  availability : boolean
}
export default function PackagesPage() {
    const [packages ,  setPackages] = useState<Package[]>([]);
    const [loading , setLoading] = useState<boolean>(true)
    const [error , setError] = useState<string | null>(null);
    const navigate = useNavigate()

    useEffect(()=>{
        const fetch = async() => {
            try {
                const response = await axios.get<Package[]>(`${BACKEND_URL}/packages`);
                const data = response.data;

                setPackages(data);
            } catch (error :any) {
                console.log(error);
                setError(error)
            }finally{
                setLoading(false);
        }   
        }

        fetch()
    } , [])

    if(loading){
        return <div className="">
            Loading....
        </div>
    }

    if(error){
        return <div className="text-red-500 flex items-center justify-center p-20">Failed to fetch</div>
    }


  return (
    <div className="bg-gray-100 min-h-screen min-w-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Available Cars</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((pack) => (
          <div
            key={pack.id}
            className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer"
            onClick={() => navigate(`/car/${pack.id}`)} // Navigate to detail page on card click
          >
            <img
              src={pack.img}
              alt={pack.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{pack.name}</h2>
            <p className="text-gray-600 text-lg">Type: {pack.description}</p>
            <p className="text-gray-600">
              Price: ₹{pack.price.toLocaleString()}
            </p>
            <p
              className={`mt-2 text-sm font-medium ${
                pack.availability ? "text-green-600" : "text-red-600"
              }`}
            >
              {pack.availability ? "Available" : "Unavailable"}
            </p>
            {pack.availability ? (
              <button
                className="bg-blue-600 hover:cursor-pointer text-white px-4 py-2 mt-4 rounded-lg w-full hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent navigation when clicking "Book Now"
                }}
              >
                Book Now
              </button>
            ) : (
              <button className="bg-gray-600 text-white px-4 py-2 mt-4 rounded-lg w-full hover:cursor-not-allowed">
                Not Available
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
