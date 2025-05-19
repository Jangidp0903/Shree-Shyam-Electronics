import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "./Button";

// Feature item type definition
interface FeatureItem {
  id: number;
  text: string;
}

const AboutSection: React.FC = () => {
  // Features list
  const features: FeatureItem[] = [
    { id: 1, text: "Learn proven strategies for digital marketing success" },
    { id: 2, text: "Step-by-step guide to build your online presence" },
    { id: 3, text: "Insider techniques used by industry professionals" },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image Content - takes 5/12 columns on large screens */}
          <div className="lg:col-span-5 w-full">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div>
                <div className="relative w-full h-0 pb-[100%] sm:pb-[80%]">
                  <Image
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="E-book cover image"
                    fill
                    className="rounded-xl object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - takes 7/12 columns on large screens */}
          <div className="lg:col-span-7 mt-6 md:mt-0">
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block text-sm sm:text-base rounded-lg font-bold text-white px-4 py-1 bg-orange-600">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6 text-gray-800 font-bold">
              Master Digital Marketing
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600">
              The comprehensive guide to building a successful online presence
              and scaling your business through proven digital marketing
              strategies. Perfect for beginners and experienced marketers alike.
            </p>

            {/* List */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center space-x-3">
                  <CircleCheckBig className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <p className="text-gray-800 font-medium text-sm sm:text-base">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <Button text="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
