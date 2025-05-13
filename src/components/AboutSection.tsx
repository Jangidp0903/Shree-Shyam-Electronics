import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

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
      observer.disconnect();
    };
  }, [features.length]);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100 overflow-hidden">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 items-center xl:grid-cols-5 gap-8 md:gap-14">
        {/* Image Content */}
        <div
          className={`xl:col-span-2 overflow-hidden rounded-xl transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-xl">
            <div
              className={`transition-transform duration-1000 ${
                imageAnimated ? "scale-110" : "scale-100"
              }`}
            >
              <Image
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="E-book cover image"
                width={500}
                height={500}
                className="rounded-xl object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="xl:col-span-3">
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
            className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl my-6 text-gray-800 font-bold transition-all duration-700 delay-100 transform ${
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
            The comprehensive guide to building a successful online presence and
            scaling your business through proven digital marketing strategies.
            Perfect for beginners and experienced marketers alike.
          </p>

          {/* List */}
          <div className="mt-8 space-y-4 md:space-y-5">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`flex items-center space-x-3 transition-all duration-500 transform ${
                  animatedItems.includes(feature.id)
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                }`}
              >
                <CircleCheckBig className="text-orange-500 w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
                <p className="text-gray-800 font-medium text-sm md:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            className={`mt-8 md:mt-10 transition-all duration-700 delay-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <button
              className="relative inline-flex items-center px-8 py-3 overflow-hidden text-base md:text-lg font-medium text-orange-600 border-2 border-orange-600 rounded-full hover:text-white group hover:bg-gray-50"
              aria-label="Learn more about the e-book"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-orange-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg
                  className="w-5 h-5"
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
              <span className="relative">Get Started Today</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
