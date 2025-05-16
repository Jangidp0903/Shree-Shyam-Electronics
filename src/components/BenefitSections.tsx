import { Book, Zap, Leaf, Sparkles } from "lucide-react";
import React from "react";
import Image from "next/image";

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
    icon: <Book className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Enhanced Visibility",
    description:
      "Ebooks can be effortlessly searched and shared across the internet, enabling readers to discover new books more readily.",
    icon: <Zap className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Eco-Conscious Choice",
    description:
      "Ebooks are environmentally friendly as they are digital, eliminating the need for paper, ink, and sustainable option compared to print books.",
    icon: <Leaf className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Enhanced Convenience",
    description:
      "Ebooks have the capacity to incorporate interactive features like videos, audio, and elevating the overall reading experience.",
    icon: <Sparkles className="w-8 h-8 text-orange-500" />,
  },
];

const BenefitSections: React.FC = () => {
  return (
    <section id="benefits" className="py-8 md:py-16">
      <div className="px-4 w-full lg:w-[90%] xl:w-[80%] mx-auto text-center">
        {/* Badge */}
        <div className="mx-auto w-fit mb-4">
          <div className="mb-4">
            <span className="inline-block text-sm sm:text-base rounded-lg font-bold text-white px-4 py-1 bg-orange-600">
              Benefits
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold">
          Discover the Benefits of Ebooks
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Plus, enjoy the convenience of offline access to our ebooks, allowing
          you to read at your convenience, anytime, and anywhere.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side Benefits */}
          <div className="space-y-6">
            {benefits.slice(0, 2).map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl text-left border border-gray-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  {benefit.icon}
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {benefit.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div>
            <div className="relative h-full min-h-64 md:min-h-80 rounded-xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/29500254/pexels-photo-29500254/free-photo-of-classic-station-clock-in-indoor-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Ebook Reader"
                width={1000}
                height={1000}
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Right Side Benefits */}
          <div className="space-y-6">
            {benefits.slice(2, 4).map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl text-left border border-gray-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  {benefit.icon}
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold mt-4 mb-2">
                  {benefit.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSections;
