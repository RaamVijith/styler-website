import React, { useState } from 'react';
import { BiHeart } from 'react-icons/bi';

import img1 from '../assets/trend/i1.png';
import img2 from '../assets/trend/i2.png';
import img3 from '../assets/trend/i3.png';
import img4 from '../assets/trend/i4.png';
import img5 from '../assets/trend/i5.png';
import img6 from '../assets/trend/i6.png';
import img7 from '../assets/trend/i7.png';
import img8 from '../assets/trend/i8.png';

import img11 from '../assets/trend/i11.png';
import img21 from '../assets/trend/i21.png';
import img31 from '../assets/trend/i31.png';
import img41 from '../assets/trend/i41.png';
import img51 from '../assets/trend/i51.png';
import img61 from '../assets/trend/i61.png';
import img71 from '../assets/trend/i71.png';
import img81 from '../assets/trend/i81.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
}

const products: Product[] = [
  { id: 1, name: 'Stevie Cargo Pant Khaki', price: 50, image:img1, hoverImage: img11 },
  { id: 2, name: 'Long Sleeve Shirt', price: 50, image: img2, hoverImage: img21 },
  { id: 3, name: 'Active Hoodie White', price: 50, image:img3, hoverImage: img31},
  { id: 4, name: 'Overshirt Brown', price: 50, image: img4, hoverImage: img41},
  { id: 5, name: 'Stevie Cargo Pant Khaki', price: 50, image:img5, hoverImage: img51 },
  { id: 6, name: 'Long Sleeve Shirt', price: 50, image: img6, hoverImage: img61 },
  { id: 7, name: 'Active Hoodie White', price: 50, image:img7, hoverImage: img71},
  { id: 8, name: 'Overshirt Brown', price: 50, image: img8, hoverImage: img81},
];

const ProductGrid: React.FC = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-[10%]">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative  rounded-lg overflow-hidden bg-[#DEDEDE]"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <img
            src={hoveredProduct === product.id ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full object-cover"
          />
          <div className="absolute top-2 right-2">
            <BiHeart size={24} className="text-gray-500 font-semibold hover:text-[#C96868] cursor-pointer" />
          </div>
          <div className="mt-2 p-4">
            <h3 className="text-base font-medium">{product.name}</h3>
            <p className="text-base font-semibold text-[#C96868]">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;