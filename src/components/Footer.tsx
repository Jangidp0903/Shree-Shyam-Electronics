import React from "react";
import { Clock, Phone, Mail, Shield, Users, Zap } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full font-sans bg-gradient-to-br from-orange-50 to-white border-t border-orange-100">
      {/* Main Footer Content */}
      <div className="relative">
        {/* Decorative Orange Accent */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Company Brand */}
              <div className="lg:col-span-2">
                <div className="mb-4">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    Shree Shyam{" "}
                    <span className="text-orange-500">Electronics</span>
                  </h2>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="w-8 h-0.5 bg-orange-500 rounded-full"></div>
                    <div className="w-4 h-0.5 bg-orange-300 rounded-full"></div>
                    <div className="w-2 h-0.5 bg-orange-200 rounded-full"></div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-md">
                  Your trusted electronics partner delivering cutting-edge
                  technology solutions with quality and exceptional service.
                </p>

                {/* Key Features */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center px-3 py-1.5 bg-white rounded-full border border-orange-100 shadow-sm">
                    <Shield className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="text-xs font-medium text-gray-700">
                      Quality Assured
                    </span>
                  </div>
                  <div className="flex items-center px-3 py-1.5 bg-white rounded-full border border-orange-100 shadow-sm">
                    <Zap className="h-4 w-4 text-orange-500 mr-2" />
                    <span className="text-xs font-medium text-gray-700">
                      Fast Service
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
                    <Phone className="h-3 w-3 text-orange-500" />
                  </div>
                  Contact
                </h3>

                <div className="space-y-3">
                  <div className="group">
                    <div className="flex items-center mb-1">
                      <Phone className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        Phone
                      </span>
                    </div>
                    <a
                      href="tel:037-2339-9874"
                      className="text-sm font-semibold text-gray-800 hover:text-orange-500 transition-colors block ml-6"
                    >
                      037-2339-9874
                    </a>
                  </div>

                  <div className="group">
                    <div className="flex items-center mb-1">
                      <Mail className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        Email
                      </span>
                    </div>
                    <a
                      href="mailto:info@shreeshyam.com"
                      className="text-sm font-semibold text-gray-800 hover:text-orange-500 transition-colors block ml-6"
                    >
                      info@shreeshyam.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
                    <Clock className="h-3 w-3 text-orange-500" />
                  </div>
                  Hours
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mon - Fri</span>
                    <span className="text-gray-900 font-medium">
                      9:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-900 font-medium">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-900 font-medium">
                      10:00 AM - 4:00 PM
                    </span>
                  </div>
                </div>

                <div className="mt-3 p-2.5 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                  <div className="flex items-start">
                    <Users className="h-4 w-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 font-medium text-xs leading-relaxed">
                      24/7 emergency support for existing customers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2 text-sm">
              <span className="text-orange-100">
                © {currentYear} Shree Shyam Electronics. All rights reserved.
              </span>
              <span className="hidden sm:inline text-orange-200">•</span>
              <span className="text-orange-200 text-xs">
                Excellence in electronics retail
              </span>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-200 rounded-full animate-pulse"></div>
              <span className="text-orange-100 font-medium text-xs">
                Serving customers with pride
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
