import React from "react";
import {
  Snowflake,
  Droplet,
  Zap,
  Wrench,
  ShieldCheck,
  Clock,
} from "lucide-react";

// Define TypeScript interface for service items
interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Updated services array with proper icons (removed delay values)
const services: ServiceItem[] = [
  {
    title: "Fridge Repair",
    description:
      "We handle all kinds of fridge issues including cooling problems, gas refilling, and compressor repair.",
    icon: (
      <Snowflake className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "Washing Machine Repair",
    description:
      "Expert repair services for top-load, front-load, and semi-automatic washing machines.",
    icon: (
      <Droplet className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "Microwave Repair",
    description:
      "We fix heating issues, plate rotation problems, and other electrical faults in all types of microwaves.",
    icon: <Zap className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />,
  },
  {
    title: "Quick Diagnosis",
    description:
      "Our technicians quickly identify the problem and suggest the best possible repair solution.",
    icon: (
      <Wrench className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "Genuine Spare Parts",
    description:
      "We only use original and branded spare parts to ensure long-lasting performance.",
    icon: (
      <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "On-Time Service",
    description:
      "We value your time – that’s why we guarantee fast and punctual repair services at your doorstep.",
    icon: (
      <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
];

// Service Card component with all animations removed
const ServiceCard: React.FC<ServiceItem> = ({ title, description, icon }) => {
  return (
    <div className="text-center mx-auto p-4 sm:p-5 md:p-6 rounded-lg">
      {/* Icon without background or hover effects */}
      <div className="mx-auto text-center">{icon}</div>

      {/* Title */}
      <h1 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-gray-900">
        {title}
      </h1>

      {/* Description */}
      <p className="text-xs sm:text-sm text-gray-600 mt-2 md:mt-4">
        {description}
      </p>
    </div>
  );
};

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="mb-4 flex justify-center">
          <span className="inline-block text-sm sm:text-base rounded-lg font-bold text-white px-3 sm:px-4 py-1 bg-orange-600">
            Our Services
          </span>
        </div>

        <div className="w-full sm:w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
