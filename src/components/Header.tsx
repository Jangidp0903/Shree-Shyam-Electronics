"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Request a Repair", href: "#repair" },
  { name: "Contact Us", href: "#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently in the viewport
      const sections = navItems.map((item) => item.href);

      // Find the section that is currently in view
      // We use a small offset to make the detection more accurate
      const offset = 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the element is in view (with offset)
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle navigation
  const handleNavigation = (href: string) => {
    // Close the mobile menu if it's open
    if (isOpen) {
      setIsOpen(false);
    }

    // Set active section
    setActiveSection(href);

    // Scroll to the target section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src={Logo}
                alt="SSE Logo"
                className="rounded-full mr-2"
                width={48}
                height={48}
                priority
              />
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                  activeSection === item.href
                    ? "text-orange-500 font-bold border-b-2 border-orange-500"
                    : "text-gray-600 hover:text-orange-500"
                }`}
                aria-label={`Navigate to ${item.name}`}
                aria-current={activeSection === item.href ? "page" : undefined}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button with custom SVG */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-orange-700 focus:outline-none transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              <div className="relative w-6 h-6">
                {/* Top line */}
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                />

                {/* Middle line */}
                <span
                  className={`absolute block h-0.5 w-6 bg-current top-3 transition-all duration-200 ease-in-out ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Bottom line */}
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Now with 80% width instead of full width */}
      <div
        className={`fixed inset-y-0 left-0 z-50 md:hidden w-4/5 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative h-full w-full bg-white shadow-xl flex flex-col">
          {/* Mobile menu header - Fixed height to match desktop header (h-16 = 64px) */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="SSE Logo"
                className="rounded-full mr-2"
                width={48}
                height={48}
                priority
              />
            </div>
          </div>

          {/* Mobile menu content */}
          <div className="flex-1 pt-2 pb-4 px-2 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`w-full text-left flex items-center px-3 py-4 text-base font-medium rounded-md bg-transparent border-none cursor-pointer ${
                  activeSection === item.href
                    ? "text-orange-500 bg-orange-50 font-bold"
                    : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                }`}
                aria-label={`Navigate to ${item.name}`}
                aria-current={activeSection === item.href ? "page" : undefined}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
