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
            <button className="relative cursor-pointer inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-orange-600 transition-colors duration-300 ease-out border-2 border-orange-600 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-500 group-hover:-rotate-180 ease"></span>
                <span className="relative">Get Started</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-orange-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
