import { Fingerprint } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Cost-Effective Option",
    description:
      "Ebooks typically come at a lower price point compared to printed books, making them accessible to a broader audience of readers.",
    icon: <Fingerprint className="w-12 h-12 mx-auto text-orange-500" />,
  },
  {
    title: "Enhanced Visibility",
    description:
      "Ebooks can be effortlessly searched and shared across the internet, enabling readers to discover new books more readily.",
    icon: <Fingerprint className="w-12 h-12 mx-auto text-orange-500" />,
  },
  {
    title: "Eco-Conscious Choice",
    description:
      "Ebooks are environmentally friendly as they are digital, eliminating the need for paper, ink, and sustainable option compared to print books.",
    icon: <Fingerprint className="w-12 h-12 mx-auto text-orange-500" />,
  },
  {
    title: "Enhanced Convenience",
    description:
      "Ebooks have the capacity to incorporate interactive features like videos, audio, and elevating the overall reading experience.",
    icon: <Fingerprint className="w-12 h-12 mx-auto text-orange-500" />,
  },
];

const BenefitSections: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial visibility check on page load
    checkVisibility();

    // Add scroll event listener
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkVisibility = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isInViewport =
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0;

      if (isInViewport) {
        setIsVisible(true);
      }
    }
  };

  return (
    <div ref={sectionRef} className="py-16">
      <div className="py-16 px-4 w-[90%] md:w-[80%] mx-auto text-center">
        {/* Badge */}
        <div className="mx-auto w-fit mb-4">
          <div
            className={`mb-4 transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } flex justify-center`}
          >
            <span className="inline-block text-sm sm:text-base rounded-lg font-bold text-white px-4 py-1 bg-orange-600">
              Benefits
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2
          className={`text-xl md:text-3xl font-bold transition-all duration-700 delay-100 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Discover the Benefits of Ebooks
        </h2>

        {/* Subheading */}
        <p
          className={`text-gray-600 mt-2 max-w-xl mx-auto text-sm md:text-base transition-all duration-700 delay-200 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Plus, enjoy the convenience of offline access to our ebooks, allowing
          you to read at your convenience, anytime, and anywhere.
        </p>

        <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 gap-6 items-center">
          {/* Left Side Cards */}
          <div className="grid gap-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                className={`p-6 bg-white shadow-md rounded-xl text-left border border-gray-200 transition-all duration-700 delay-${
                  300 + index * 100
                } transform ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-16 opacity-0"
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  {/* Title */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Image with zoom animation */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-500 transform ${
              isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://images.pexels.com/photos/30489075/pexels-photo-30489075/free-photo-of-elegant-gentleman-enjoying-a-latte-in-slovakia.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="E-book hero image"
                width={600}
                height={600}
                className={`rounded-xl object-cover transition-transform duration-2000 ${
                  isVisible ? "scale-105" : "scale-100"
                }`}
                priority
              />
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6">
            {benefits.slice(2).map((benefit, index) => (
              <div
                key={index}
                className={`p-6 bg-white shadow-md rounded-xl text-left border border-gray-200 transition-all duration-700 delay-${
                  300 + index * 100
                } transform ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-16 opacity-0"
                }`}
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-col">
                    <span className="text-3xl">{benefit.icon}</span>
                  </div>
                  {/* Title */}
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSections;
