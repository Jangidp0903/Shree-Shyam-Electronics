import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define animations using CSS
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Set animation visibility after component mounts for entry animations
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex justify-center items-center py-4 sm:py-6 md:py-12 overflow-hidden"
    >
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-animation {
          animation: pulse 3s ease-in-out infinite;
        }
        .bounce-animation {
          animation: bounce 4s ease-in-out infinite;
        }
      `}</style>

      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Text Content */}
        <div
          className={`flex flex-col justify-center transform transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div
            className={`mb-3 sm:mb-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block text-xs sm:text-sm md:text-base rounded-lg font-bold text-white px-3 sm:px-4 py-1 bg-orange-600">
              Digital E-Book
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 font-bold text-blue-950 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Ebooks to Foster Your Personal and Professional{" "}
            <span className="text-orange-500">Development</span>
          </h1>

          {/* Description */}
          <p
            className={`text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quae eligendi, nostrum minima magnam reiciendis
            maxime saepe ab nemo vitae cupiditate delectus minus est laboriosam
            pariatur corrupti nobis quas natus!
          </p>

          {/* Button */}
          <div
            className={`mt-2 transition-all duration-700 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              type="button"
              className="relative cursor-pointer inline-flex items-center justify-start py-2 sm:py-3 pl-3 sm:pl-4 pr-10 sm:pr-12 overflow-hidden font-semibold text-orange-600 transition-all duration-300 ease-in-out rounded hover:pl-8 sm:hover:pl-10 hover:pr-4 sm:hover:pr-6 bg-white border border-orange-300 group text-xs sm:text-sm md:text-base"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-300 ease-in-out bg-orange-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-3 sm:pr-4 duration-300 ease-out group-hover:translate-x-12">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2 sm:pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-300">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>

        {/* Image Container - Visible on all screens with animation */}
        <div
          className={`flex justify-center items-center order-first xl:order-last transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
            {/* Animated floating effect for the image */}
            <div className="float-animation">
              <Image
                src="https://images.pexels.com/photos/27897903/pexels-photo-27897903/free-photo-of-close-up-portrait-of-a-man.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="E-book hero image"
                width={500}
                height={600}
                className="rounded-t-full shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
