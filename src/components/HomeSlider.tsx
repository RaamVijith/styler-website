import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Define TypeScript interfaces
interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface ArrowProps {
  onClick?: () => void;
}

// Custom Arrow Components
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-700 transition"
    aria-label="Previous slide"
  >
    <FaChevronLeft size={24} />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-800/80 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-700 transition"
    aria-label="Next slide"
  >
    <FaChevronRight size={24} />
  </button>
);

const HomeSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const slides: Slide[] = [
    {
      id: 1,
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/slide-name-6-e1639581898719.jpg",
      title: "TIMELESS ELEGANCE",
      subtitle: "Discover Furniture For Living",
      description: "Timeless Elegance for Your Space - Create the perfect atmosphere with our carefully curated collection of furniture pieces."
    },
    {
      id: 2,
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/slide-name-10.jpg",
      title: "MODERN COMFORT",
      subtitle: "Transform Your Living Space",
      description: "Experience the perfect blend of style and comfort with our modern furniture collection."
    },
    {
      id: 2,
      image: "https://ninetheme.com/themes/styler/fashion/wp-content/uploads/2021/12/slide-name-11-e1639582418554.jpg",
      title: "MODERN COMFORT",
      subtitle: "Transform Your Living Space",
      description: "Experience the perfect blend of style and comfort with our modern furniture collection."
    }
  ];

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-center bg-cover transform transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: `url(${slide.image})`
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-white px-4">
            <div className="max-w-4xl text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mb-4">
                {slide.title}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                {slide.subtitle}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                {slide.description}
              </p>
              
              <button className="group inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-white hover:text-orange-500 transition duration-300">
                <span className="mr-2">Shop Now</span>
                <span className="flex items-center justify-center w-8 h-8 bg-white text-orange-500 rounded-full group-hover:bg-orange-500 group-hover:text-white transition duration-300">
                  <FaChevronRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <PrevArrow onClick={prevSlide} />
      <NextArrow onClick={nextSlide} />
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-orange-500" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;