import { Wrench, ShieldCheck, Timer, Smile } from "lucide-react";
import React from "react";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Affordable Repairs",
    description:
      "Get your fridge, washing machine, microwave, and more repaired at budget-friendly prices without compromising on quality.",
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Certified Technicians",
    description:
      "Our expert technicians are trained and certified to repair all major brands, ensuring safe and professional service every time.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Quick Turnaround",
    description:
      "We value your time — that's why we offer fast and efficient repair services with same-day or next-day service availability.",
    icon: <Timer className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Thousands of happy customers trust our reliable service. We strive to deliver 100% satisfaction with every repair job.",
    icon: <Smile className="w-8 h-8 text-orange-500" />,
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
          Why Choose Our Repair Services?
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          We provide fast, reliable, and affordable repair services for all your
          home appliances — from refrigerators to washing machines and more.
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
                alt="Appliance Repair Service"
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
