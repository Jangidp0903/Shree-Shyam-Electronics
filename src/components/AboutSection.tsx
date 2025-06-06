import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import About from "././../../public/about.png";

// Feature item type definition
interface FeatureItem {
  id: number;
  text: string;
}

const AboutSection: React.FC = () => {
  // Features list
  const features: FeatureItem[] = [
    { id: 1, text: "Certified washing machine repair technicians near you" },
    {
      id: 2,
      text: "Quick microwave oven repair doorstep service",
    },
    { id: 3, text: "Affordable refrigerator repair with genuine spare parts" },
  ];

  return (
    <section id="about" className="bg-gray-100 overflow-hidden">
      <div className="container mx-auto">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-end items-end">
          {/* Image Content - Smaller width but taller height on mobile */}
          <div className="lg:col-span-5 w-4/5 sm:w-3/5 md:w-5/12 lg:w-5/12 mx-auto md:mx-0 order-2 md:order-1">
            <div className="overflow-hidden rounded-xl">
              <div>
                {/* Increased height: Mobile 120%, tablet 110%, desktop 100% */}
                <div className="relative w-full h-0 pb-[120%] sm:pb-[110%] lg:pb-[100%]">
                  <Image
                    src={About}
                    alt="Technician repairing home appliances like washing machine and fridge"
                    fill
                    className="rounded-xl object-cover"
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 80vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 w-full md:w-7/12 lg:w-7/12 mt-4 p-4 md:p-6 lg:p-10 md:mt-0 order-1 md:order-2 px-4 sm:px-6">
            {/* Badge */}
            <div className="mb-3 sm:mb-4">
              <span className="inline-block text-xs sm:text-sm md:text-base rounded-lg font-bold text-white px-3 sm:px-4 py-1 bg-orange-500">
                About Our Appliance Repair Services
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-3 sm:my-4 md:my-6 text-gray-800 font-bold">
              Trusted & Affordable Home Appliance Repair at Your Doorstep
            </h2>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600">
              Our certified technicians specialize in home appliance repair
              services such as refrigerators, washing machines, and microwave
              ovens. Get expert home servicing with genuine parts and fast
              doorstep solutions. Whether your machine isn&apos;t cooling or
              won&apos;t start, we&apos;re here to help.
            </p>

            {/* List */}
            <div className="mt-4 sm:mt-6 md:mt-8 space-y-2 sm:space-y-3 md:space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center space-x-2 sm:space-x-3"
                >
                  <CircleCheckBig className="text-orange-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                  <p className="text-gray-800 font-medium text-xs sm:text-sm md:text-base">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10">
              <Button text="Schedule Repair" phoneNumber="+919873126033" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
