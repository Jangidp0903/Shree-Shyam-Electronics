import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define types for our carousel
interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

// Slide data with image URLs
interface SlideType {
  id: number;
  url: string;
  title: string;
  description: string;
}

const slides: SlideType[] = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/939473/pexels-photo-939473.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Serene Mountains",
    description: "Majestic peaks under clear blue skies",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/2225616/pexels-photo-2225616.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Tropical Paradise",
    description: "Crystal clear waters and golden sands",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/18253868/pexels-photo-18253868/free-photo-of-hindu-figurines-decorated-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Urban Architecture",
    description: "Modern design meets historical influence",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/18491928/pexels-photo-18491928/free-photo-of-4x4-truck-on-highway.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Autumn Forest",
    description: "Vibrant colors of fall in pristine wilderness",
  },
];

const CustomCarousel: React.FC<CarouselProps> = ({
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const prev = useCallback(() => {
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, []);

  // Handle touch events for mobile swipe
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }
  }, [touchStart, touchEnd, minSwipeDistance, next, prev]);

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide || isHovering) return;

    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, isHovering, next]);

  // Animation class for slide transition
  const getAnimationClass = (index: number) => {
    if (index === current) return "opacity-100 scale-100";
    return "opacity-0 scale-95";
  };

  return (
    <div
      className="relative overflow-hidden w-full mx-auto rounded-2xl shadow-2xl bg-gray-900"
      style={{ height: "400px" }} // Fixed height for rectangular shape
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${getAnimationClass(
              index
            )}`}
            aria-hidden={index !== current}
          >
            {/* Image */}
            <img
              src={slide.url}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content container */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 md:p-10 text-white transform transition-all duration-500 ease-out">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  {slide.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-2 sm:px-6 md:px-10 -translate-y-1/2 z-10">
        <button
          onClick={prev}
          className="p-2 sm:p-3 cursor-pointer rounded-full bg-orange-100/30 text-white hover:bg-orange-100/50 backdrop-blur-sm transition-all duration-300 shadow-lg focus:outline-none transform hover:scale-110 border border-orange-200/30"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="sm:hidden" />
          <ChevronLeft size={24} className="hidden sm:block" />
        </button>
        <button
          onClick={next}
          className="p-2 sm:p-3 cursor-pointer rounded-full bg-orange-100/30 text-white hover:bg-orange-100/50 backdrop-blur-sm transition-all duration-300 shadow-lg focus:outline-none transform hover:scale-110 border border-orange-200/30"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="sm:hidden" />
          <ChevronRight size={24} className="hidden sm:block" />
        </button>
      </div>
    </div>
  );
};

// Main component with improved layout
const ImageShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-8 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Premium Image Showcase
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
          </h1>
          <p className="text-orange-800/70 text-sm sm:text-lg max-w-3xl mx-auto">
            Experience our beautiful collection with this professional carousel
            slider
          </p>
        </div>

        <CustomCarousel />
      </div>
    </div>
  );
};

export default ImageShowcase;
