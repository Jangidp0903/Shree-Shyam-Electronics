"use client";
import React from "react";
import Herpsection from "../components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import BenefitSections from "@/components/BenefitSections";

const page = () => {
  return (
    <>
      <main className="mt-16 bg-white">
        {/* Hero Section */}
        <section id="home">
          <Herpsection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServiceSection />
        </section>

        {/* Benefits Section */}
        <section id="benefits">
          <BenefitSections />
        </section>

        {/* Repair Section */}
        <section
          id="repair"
          className="h-screen bg-gray-400 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Repair Section</h1>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="h-screen bg-gray-500 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold text-white">Contact Section</h1>
        </section>
      </main>
    </>
  );
};

export default page;
