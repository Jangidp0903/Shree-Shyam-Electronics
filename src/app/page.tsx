import React from "react";
import Herpsection from "../components/HeroSection";

const page = () => {
  return (
    <>
      <main className="mt-16">
        <section id="home">
          <Herpsection />
        </section>

        <section
          id="about"
          className="h-screen bg-gray-200 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">About Section</h1>
        </section>

        <section
          id="services"
          className="h-screen bg-gray-300 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Service Section</h1>
        </section>

        <section
          id="repair"
          className="h-screen bg-gray-400 flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Repair Section</h1>
        </section>

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
