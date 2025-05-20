import React from "react";
import { Clock, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full font-sans"
      aria-label="Footer for Shree Shyam Electronics - Trusted Electronics Store with 24/7 Customer Support and Contact Details"
    >
      <div className="bg-white border-t border-gray-200 py-6 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left">
            {/* Logo */}
            <div className="font-bold text-gray-800 text-2xl tracking-tight">
              Shree Shyam Electronics
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {currentYear} Shree Shyam Electronics. All rights reserved.
            </div>

            {/* Contact Info */}
            <div className="flex items-center justify-center gap-4">
              {/* Support */}
              <div className="flex items-center">
                <Clock
                  className="h-4 w-4 text-orange-500 mr-2"
                  strokeWidth={2}
                />
                <span className="text-gray-600 text-sm">
                  24/7 Customer Support
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <Phone
                  className="h-4 w-4 text-orange-500 mr-2"
                  strokeWidth={2}
                />
                <a
                  href="tel:037-2339-9874"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  037-2339-9874
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
