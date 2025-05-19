"use client";
import React from "react";
import Herpsection from "../components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import BenefitSections from "@/components/BenefitSections";
import ImageData from "@/components/ImageData";
import ContactSection from "@/components/ContactSection";

const page = () => {
  return (
    <>
      <main className="mt-16 bg-white">
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

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
};

export default page;
