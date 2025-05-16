import React, { useEffect, useRef } from "react";
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
  delay: number;
}

// Updated services array with proper icons and delay values for staggered animations
const services: ServiceItem[] = [
  {
    title: "Touch to buy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Fingerprint className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
    delay: 0,
  },
  {
    title: "Secure Data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Shield className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
    delay: 100,
  },
  {
    title: "Instant Chat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <MessageCircle className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
    delay: 200,
  },
  {
    title: "Live Notification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Bell className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
    delay: 300,
  },
  {
    title: "Wifi Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Wifi className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
    delay: 400,
  },
  {
    title: "App Watch",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.",
    icon: (
      <Watch className="w-10 h-10 md:w-12 md:h-12 mx-auto text-orange-500" />
    ),
    delay: 500,
  },
];

// Service Card component with animation
const ServiceCard: React.FC<ServiceItem> = ({
  title,
  description,
  icon,
  delay,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add("animate-complete");
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className="text-center mx-auto p-4 sm:p-5 md:p-6 rounded-lg transform translate-y-10 opacity-0 animate-slide-up"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "forwards",
      }}
    >
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
        <div className="mb-4 transition-all duration-700 transform translate-y-0 opacity-100 flex justify-center">
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
              delay={service.delay}
            />
          ))}
        </div>
      </div>

      {/* Add animation styles */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          animation-play-state: paused;
        }
        
        .animate-complete {
          animation-play-state: running;
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;
