import { useState } from 'react';

interface CategoryItem {
  image: string;
  title: string;
  productCount: number;
}

const ProductCategoriesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const categories: CategoryItem[] = [
    {
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-36-300x300.jpeg",
      title: "WOMEN",
      productCount: 18
    },
    {
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/09/product-name-9-300x300.jpeg",
      title: "MEN",
      productCount: 15
    },
    {
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-128-300x300.jpeg",
      title: "BASICS",
      productCount: 3
    },
    {
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/black-gingham-belted-mini-shirt-dress-e1639323379980-300x300.jpeg",
      title: "T-SHIRTS",
      productCount: 8
    },
    {
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-2-300x300.jpeg",
      title: "SWEATERS",
      productCount: 9
    },
    {
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/product-name-64-300x300.jpeg",
      title: "SWEATERS",
      productCount: 3
    }
  ];

  // Calculate number of pages based on screen size and items
  const itemsPerPage = {
    'sm': 2,
    'md': 3,
    'lg': 4,
    'xl': 6
  };

  const totalPages = Math.ceil(categories.length / itemsPerPage.sm); // Using smallest view for max pages

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  return (
    <div className="w-full px-8 py-[15vh] space-y-6">
      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 overflow-hidden">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-transform duration-300 hover:scale-105 w-[270px]"
          >
            <div className="h-[350px] overflow-hidden bg-gray-100">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-[#F5F4EE] p-4">
              <h3 className="text-sm font-medium">{category.title}</h3>
              <p className="text-xs text-gray-600">{category.productCount} PRODUCTS</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-black w-4' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategoriesSlider;