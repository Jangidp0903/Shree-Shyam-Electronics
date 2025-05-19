import React from "react";
import {
  Fingerprint,
  Shield,
  MessageCircle,
  Bell,
  Wifi,
  Watch,
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
    title: "Touch to buy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Fingerprint className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "Secure Data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Shield className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "Instant Chat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <MessageCircle className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "Live Notification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Bell className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "Wifi Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Wifi className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
  },
  {
    title: "App Watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Watch className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
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
