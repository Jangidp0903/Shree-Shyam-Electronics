import Image from "next/image";
import React from "react";
import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex justify-center items-center py-4 sm:py-6 md:py-12 overflow-hidden"
    >
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="mb-3 sm:mb-4">
            <span className="inline-block text-xs sm:text-sm md:text-base rounded-lg font-bold text-white px-3 sm:px-4 py-1 bg-orange-600">
              Digital E-Book
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 font-bold text-blue-950">
            Ebooks to Foster Your Personal and Professional{" "}
            <span className="text-orange-500">Development</span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quae eligendi, nostrum minima magnam reiciendis
            maxime saepe ab nemo vitae cupiditate delectus minus est laboriosam
            pariatur corrupti nobis quas natus!
          </p>

          {/* Button */}
          <div className="mt-2">
            <Button text="Explore Now" />
          </div>
        </div>

        {/* Image Container - Visible on all screens */}
        <div className="flex justify-center items-center order-first xl:order-last">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
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
    </section>
  );
};

export default HeroSection;
