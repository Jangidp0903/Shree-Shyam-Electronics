import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

// Feature item type definition
interface FeatureItem {
  id: number;
  text: string;
}

const AboutSection: React.FC = () => {
  // Refs
  const sectionRef = useRef<HTMLDivElement>(null);

  // State for animation control
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const [imageAnimated, setImageAnimated] = useState<boolean>(false);

  // Features list
  const features: FeatureItem[] = [
    { id: 1, text: "Learn proven strategies for digital marketing success" },
    { id: 2, text: "Step-by-step guide to build your online presence" },
    { id: 3, text: "Insider techniques used by industry professionals" },
  ];

  // Intersection Observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Set component visibility
          setIsVisible(true);

          // Animate image on visibility
          setTimeout(() => {
            setImageAnimated(true);
          }, 300);

          // Animate features one by one with delay
          const timer = setTimeout(() => {
            const interval = setInterval(() => {
              setAnimatedItems((prev) => {
                const nextItem =
                  prev.length === 0 ? 1 : prev[prev.length - 1] + 1;
                if (nextItem <= features.length) {
                  return [...prev, nextItem];
                }
                clearInterval(interval);
                return prev;
              });
            }, 200);

            return () => clearInterval(interval);
          }, 500);

          // Disconnect observer once visible
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [features.length]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 bg-gray-100 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image Content - takes 5/12 columns on large screens */}
          <div className="lg:col-span-5 w-full">
            <div
              className={`overflow-hidden rounded-xl shadow-lg transition-all duration-700 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              <div
                className={`transition-transform duration-1000 ${
                  imageAnimated ? "scale-110" : "scale-100"
                }`}
              >
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
            <div
              className={`mb-4 transition-all duration-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span className="inline-block text-sm sm:text-base rounded-lg font-bold text-white px-4 py-1 bg-orange-600">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl my-4 sm:my-6 text-gray-800 font-bold transition-all duration-700 delay-100 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Master Digital Marketing
            </h1>

            {/* Description */}
            <p
              className={`text-sm md:text-base lg:text-lg font-medium text-gray-600 transition-all duration-700 delay-200 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              The comprehensive guide to building a successful online presence
              and scaling your business through proven digital marketing
              strategies. Perfect for beginners and experienced marketers alike.
            </p>

            {/* List */}
            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`flex items-center space-x-3 transition-all duration-500 transform ${
                    animatedItems.includes(feature.id)
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                >
                  <CircleCheckBig className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <p className="text-gray-800 font-medium text-sm sm:text-base">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div
              className={`mt-6 sm:mt-8 lg:mt-10 transition-all duration-700 delay-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <Button text="Get Started" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
