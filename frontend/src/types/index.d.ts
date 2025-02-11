interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
  couponCode?: string;
  availability: boolean;
  days: string
  oldPrice?: string;
  features: string[];
}


// Define Car interface with correct properties
interface Car {
  id: string;
  name: string;
  type: "economy" | "premium" | "luxury";
  price: number;
  description: string;
  availability: boolean;
  image: string;
  category?: string; 
  seats?: string; 
  transmission?: string; 
  fuel?: string; 
}