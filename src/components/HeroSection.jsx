import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full h-screen flex justify-center flex-col">
        <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/* Text Content */}
          <div>
            {/* Box Text */}
            <p className="text-sm sm:text-base rounded-lg font-bold text-white px-4 py-1 bg-orange-600 w-fit">
              Digital E-Book
            </p>
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-blue-950">
              Ebooks to Foster Your Personal and Professional{" "}
              <span className="text-orange-500">Development</span>
            </h1>
            {/* Description */}
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quae eligendi, nostrum minima magnam reiciendis
              maxime saepe ab nemo vitae cupiditate delectus minus est
              laboriosam pariatur corrupti nobis quas natus!
            </p>
            {/* Button */}
            <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* 1st Button */}
              <button
                type="button"
                className="relative cursor-pointer inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-orange-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-white border border-orange-300 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-orange-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-orange-600"
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
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-white"
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
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Button Text
                </span>
              </button>
            </div>
          </div>
          {/* Image */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
