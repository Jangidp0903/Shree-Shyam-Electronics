import { Wrench, ShieldCheck, Timer, Smile } from "lucide-react";
import React from "react";
import Image from "next/image";
import Benefits from "../../public/benefits.png";

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    title: "Affordable Home Appliance Repairs",
    description:
      "Book expert appliance repair for fridge, washing machine, or microwave at affordable prices. Reliable and efficient technicians at your doorstep.",
    icon: <Wrench className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Certified & Verified Technicians",
    description:
      "Our skilled and certified technicians ensure professional service for all leading home appliance brands. Background-checked and experienced pros only.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Quick Turnaround – Same Day Repair",
    description:
      "Experience fast home appliance repair with our same-day or next-day service. We value your time with hassle-free bookings and quick response.",
    icon: <Timer className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Trusted by Thousands of Customers",
    description:
      "We have served thousands of happy households with reliable and honest appliance repair. Rated best for customer satisfaction and timely service.",
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
            <span className="inline-block text-sm sm:text-base rounded-lg font-bold text-white px-4 py-1 bg-orange-500">
              Appliance Repair Benefits
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold">
          Why Choose Our Certified Appliance Repair Services?
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm md:text-base">
          We offer budget-friendly and professional repair services for your
          home appliances like refrigerator, washing machine, and microwave —
          with same-day service and verified technicians.
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
                <h3 className="text-lg text-gray-800 font-semibold mt-4 mb-2">
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
                src={Benefits}
                alt="Affordable home appliance repair service"
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
                <h3 className="text-lg text-gray-800 font-semibold mt-4 mb-2">
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
