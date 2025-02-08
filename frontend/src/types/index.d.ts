interface Package {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string;
  couponCode?: string;
  availability: boolean;
}


interface Car {
  id: string;
  name: string;
  type: "economy" | "premium" | "luxury";
  price: number;
  description: string;
  availability: boolean;
  image: string;
}