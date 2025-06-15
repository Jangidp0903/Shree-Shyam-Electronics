"use client";
import React from "react";
import Herpsection from "../components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import BenefitSections from "@/components/BenefitSections";
import ImageData from "@/components/ImageData";
import ContactSection from "@/components/ContactSection";
import WhyChooseUs from "@/components/WhyChooseUs";

const Page: React.FC = () => {
  return (
    <>
      <main className="mt-16 bg-white relative">
        {/* Hero Section */}
        <Herpsection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServiceSection />

        {/* Benefits Section */}
        <BenefitSections />

        {/* Image Section */}
        <ImageData />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Contact Section */}
        <ContactSection />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919873126033?text=Hi%20Shree%20Shyam%2C%20I%20need%20fridge%2C%20washing%20machine%2C%20or%20microwave%20repair%20in%20Gurugram."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp for fridge, washing machine, or microwave repair in Gurugram"
          className="fixed bottom-5 right-5 z-50 w-12 h-12"
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 455.731 455.731"
            xmlSpace="preserve"
            className="w-12 h-12 rounded-full"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <rect
                  x="0"
                  y="0"
                  style={{ fill: "#1BD741" }}
                  width="455.731"
                  height="455.731"
                ></rect>
                <g>
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M68.494,387.41l22.323-79.284c-14.355-24.387-21.913-52.134-21.913-80.638 
               c0-87.765,71.402-159.167,159.167-159.167s159.166,71.402,159.166,159.167c0,87.765-71.401,159.167-159.166,159.167 
               c-27.347,0-54.125-7-77.814-20.292L68.494,387.41z M154.437,337.406l4.872,2.975c20.654,12.609,44.432,19.274,68.762,19.274 
               c72.877,0,132.166-59.29,132.166-132.167S300.948,95.321,228.071,95.321S95.904,154.611,95.904,227.488 
               c0,25.393,7.217,50.052,20.869,71.311l3.281,5.109l-12.855,45.658L154.437,337.406z"
                  />
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M183.359,153.407l-10.328-0.563c-3.244-0.177-6.426,0.907-8.878,3.037 
               c-5.007,4.348-13.013,12.754-15.472,23.708c-3.667,16.333,2,36.333,16.667,56.333c14.667,20,42,52,90.333,65.667 
               c15.575,4.404,27.827,1.435,37.28-4.612c7.487-4.789,12.648-12.476,14.508-21.166l1.649-7.702 
               c0.524-2.448-0.719-4.932-2.993-5.98l-34.905-16.089c-2.266-1.044-4.953-0.384-6.477,1.591l-13.703,17.764 
               c-1.035,1.342-2.807,1.874-4.407,1.312c-9.384-3.298-40.818-16.463-58.066-49.687c-0.748-1.441-0.562-3.19,0.499-4.419 
               l13.096-15.15c1.338-1.547,1.676-3.722,0.872-5.602l-15.046-35.201C187.187,154.774,185.392,153.518,183.359,153.407z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </a>
      </main>
    </>
  );
};

export default Page;
