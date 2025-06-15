import React, { ReactNode } from "react";
import { Snowflake, Microwave, Droplets } from "lucide-react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Snowflake size={40} className="text-orange-500" />,
    title: "High-Performance Fridges",
    description:
      "Keep your food fresh and your kitchen stylish with our energy-efficient, modern refrigerators.",
  },
  {
    icon: <Droplets size={40} className="text-orange-500" />,
    title: "Efficient Washing Machines",
    description:
      "Powerful wash cycles with silent operation and advanced features designed for convenience.",
  },
  {
    icon: <Microwave size={40} className="text-orange-500" />,
    title: "Smart Microwaves",
    description:
      "Fast, safe, and smart. Our microwaves offer sleek designs and multifunctional cooking modes.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
            Why Choose Us for Electronics?
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            Trusted, high-quality appliances like fridges, washing machines, and
            microwaves — built to last and impress.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-orange-100 hover:bg-orange-200 transition-colors duration-300 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-orange-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
