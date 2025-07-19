"use client";

import React, { useState, useEffect } from "react";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Nav links with section IDs (anchors)
  const navLinks = [
    { label: "Home", href: "#header" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  // Update activeSection on scroll based on viewport
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      navLinks.forEach(({ href }) => {
        const id = href.replace("#", "");
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 200) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">Portfolio</div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium items-center">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={
                  "hover:text-blue-500 transition-colors " +
                  (activeSection === href.substring(1)
                    ? "text-blue-600 font-bold"
                    : "text-gray-700")
                }
                onClick={() => setIsOpen(false)} // close menu on click
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <SocialMedia />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium bg-white">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={
                "block py-2 hover:text-blue-500 transition-colors " +
                (activeSection === href.substring(1)
                  ? "text-blue-600 font-bold"
                  : "text-gray-700")
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
          <SocialMedia />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
