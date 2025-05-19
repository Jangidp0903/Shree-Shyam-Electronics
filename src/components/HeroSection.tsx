import Image from "next/image";
import React from "react";
import Button from "./Button";
import { StaticImageData } from "next/image";

import Hero from "../../public/hero.png";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex justify-center items-center py-4 sm:py-6 md:py-12 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 xl:order-1 mt-8 xl:mt-0">
            {/* Badge */}
            <div className="mb-3 sm:mb-4">
              <span className="inline-block text-xs sm:text-sm md:text-base rounded-lg font-bold text-white px-3 sm:px-4 py-1 bg-orange-600">
                Trusted Appliance Repair
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 font-bold text-blue-950">
              Affordable & Reliable Appliance Repair Services{" "}
              <span className="text-orange-500">
                for Washing Machines, Fridges & More
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl">
              We specialize in fast, affordable appliance repair services at
              your doorstep. Whether it’s a fridge not cooling, a broken washing
              machine, microwave issues, or motor failure — our expert
              technicians are here to help. Book trusted home appliance repair
              in your area with same-day service options.
            </p>

            {/* Button */}
            <div className="mt-2">
              <Button text="Book Home Appliance Repair Now" />
            </div>
          </div>

          {/* Image Container */}
          <div className="flex justify-center items-center order-1 xl:order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src={Hero as StaticImageData}
                alt="Technician providing reliable home appliance repair service"
                width={500}
                height={600}
                layout="responsive"
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
