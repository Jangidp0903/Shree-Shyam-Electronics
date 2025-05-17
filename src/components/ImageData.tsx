import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
    url: "https://images.pexels.com/photos/29500254/pexels-photo-29500254/free-photo-of-classic-station-clock-in-indoor-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Serene Mountains",
    description: "Majestic peaks under clear blue skies",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/32058301/pexels-photo-32058301/free-photo-of-misty-lakefront-view-with-forest-and-hotel.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Tropical Paradise",
    description: "Crystal clear waters and golden sands",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/30723351/pexels-photo-30723351/free-photo-of-romantic-wedding-couple-on-serene-lake-dock.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Urban Architecture",
    description: "Modern design meets historical influence",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/31969691/pexels-photo-31969691/free-photo-of-cozy-chihuahua-sleeping-on-minimalist-bedding.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Autumn Forest",
    description: "Vibrant colors of fall in pristine wilderness",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/30902625/pexels-photo-30902625/free-photo-of-charming-french-provencal-architecture-in-lourmarin.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Desert Sunset",
    description: "Golden hours across endless sand dunes",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/31687308/pexels-photo-31687308/free-photo-of-winter-cityscape-with-skyscrapers-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Ocean Waves",
    description: "Powerful currents crashing against rocky shores",
  },
];

const MultiCardCarousel: React.FC<CarouselProps> = ({
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Responsive cards to show based on screen size
  const getCardsToShow = useCallback((): number => {
    if (windowWidth < 768) {
      return 1; // Mobile: 1 card
    } else if (windowWidth < 1024) {
      return 2; // Tablet: 2 cards
    } else {
      return 3; // Desktop: 3 cards
    }
  }, [windowWidth]);

  // Get cards to show
  const cardsToShow = getCardsToShow();

  // Calculate the maximum valid current position
  const maxPosition = Math.max(0, slides.length - cardsToShow);

  // Current position state with proper constraint to prevent white space
  const [curr, setCurr] = useState(0);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Previous slide function with proper bounds checking
  const prev = useCallback(() => {
    setCurr((current) => Math.max(0, current - 1));
  }, []);

  // Next slide function with proper bounds checking
  const next = useCallback(() => {
    setCurr((current) => Math.min(maxPosition, current + 1));
  }, [maxPosition]);

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
  }, [touchStart, touchEnd, next, prev, minSwipeDistance]);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      // Add event listener
      window.addEventListener("resize", handleResize);
    }

    // Clean up
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  // Ensure current position is valid when cards to show changes
  useEffect(() => {
    setCurr((current) => Math.min(current, maxPosition));
  }, [cardsToShow, maxPosition]);

  // Auto slide functionality
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      setCurr((current) => {
        // If at the end, go back to start
        if (current >= maxPosition) {
          return 0;
        }
        // Otherwise go to next slide
        return current + 1;
      });
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, maxPosition]);

  // Determine card width class based on cards to show
  const getCardWidthClass = useCallback(() => {
    switch (cardsToShow) {
      case 1:
        return "w-full"; // 100% width for 1 card
      case 2:
        return "w-1/2"; // 50% width for 2 cards
      case 3:
      default:
        return "w-1/3"; // 33.3% width for 3 cards
    }
  }, [cardsToShow]);

  return (
    <div
      className="relative overflow-hidden w-full mx-auto"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Cards container with smooth transitions */}
      <div className="flex w-full">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(curr * 100) / cardsToShow}%)`,
            width: `${(slides.length * 100) / cardsToShow}%`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={`${getCardWidthClass()} flex-shrink-0 p-4 transition-all duration-300`}
            >
              <div className="rounded-lg overflow-hidden h-full shadow-md group relative">
                {/* Fixed height container that works on all devices */}
                <div className="relative w-full h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
                  <Image
                    src={slide.url}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={slide.id === 1}
                  />

                  {/* Overlay content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {slide.title}
                    </h3>
                    <p className="text-sm text-gray-200 mb-3">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-x-0 top-1/2 flex items-center justify-between px-4 -translate-y-1/2 z-10">
        <button
          onClick={prev}
          disabled={curr === 0}
          className={`p-2 rounded-full text-white backdrop-blur-sm transition-all duration-300 shadow-lg focus:outline-none border border-orange-200/30 ${
            curr === 0
              ? "bg-orange-100/10 cursor-not-allowed opacity-50"
              : "bg-orange-100/30 hover:bg-orange-100/50 cursor-pointer"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          disabled={curr >= maxPosition}
          className={`p-2 rounded-full text-white backdrop-blur-sm transition-all duration-300 shadow-lg focus:outline-none border border-orange-200/30 ${
            curr >= maxPosition
              ? "bg-orange-100/10 cursor-not-allowed opacity-50"
              : "bg-orange-100/30 hover:bg-orange-100/50 cursor-pointer"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// Main component with improved layout
const ImageData: React.FC = () => {
  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Premium Image Cards
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></span>
          </h1>
          <p className="text-orange-800/70 text-lg max-w-3xl mx-auto">
            Browse our collection with this elegant responsive carousel
          </p>
        </div>

        <MultiCardCarousel />
      </div>
    </div>
  );
};

export default ImageData;
