import { useState } from "react";
import { BiHeart } from "react-icons/bi";

import img1 from "../assets/trend/i1.png";
import img2 from "../assets/trend/i2.png";
import img3 from "../assets/trend/i3.png";
import firstImg from "../assets/img1.png";

import img11 from "../assets/trend/i11.png";
import img21 from "../assets/trend/i21.png";
import img31 from "../assets/trend/i31.png";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Stevie Cargo Pant Khaki",
    price: 50,
    image: img1,
    hoverImage: img11,
  },
  {
    id: 2,
    name: "Long Sleeve Shirt",
    price: 50,
    image: img2,
    hoverImage: img21,
  },
  {
    id: 3,
    name: "Active Hoodie White",
    price: 50,
    image: img3,
    hoverImage: img31,
  },
];

const JustLanded = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-[2%] h-[350px] py-[15vh]">
      <div className="relative  rounded-lg overflow-hidden bg-[#DEDEDE]">
        <img src={firstImg} alt="img" className="w-full object-cover" />
        <div className="absolute top-[60%] left-[10%] w-[50%] ">
          <div className="font-semibold text-base text-white text-left ">
            35 NEW ITEMS
          </div>
          <div className=" text-lg text-white text-left ">
            Discover the latest trends with our new arrivals
          </div>
          <button className="bg-white text-black w-[119px] h-[36px] font-['Roboto'] text-lg mt-6 font-medium rounded-md">
            Shop New In
          </button>
        </div>
      </div>
      {products.map((product) => (
        <div
          key={product.id}
          className="relative  rounded-lg overflow-hidden bg-[#DEDEDE] "
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <img
            src={
              hoveredProduct === product.id ? product.hoverImage : product.image
            }
            alt={product.name}
            className="w-full object-cover "
          />
          <div className="absolute top-2 right-2">
            <BiHeart
              size={24}
              className="text-gray-500 font-semibold hover:text-[#C96868] cursor-pointer"
            />
          </div>
          <div className="mt-2 p-4">
            <h3 className="text-base font-medium">{product.name}</h3>
            <p className="text-base font-semibold text-[#C96868]">
              ${product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JustLanded;
