"use client";

import React, { useState, useEffect, useMemo } from "react";
import SocialMedia from "@/components/ui/SocialMedia/SocialMedia";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = useMemo(
    () => [
      { label: "Home", href: "#header" },
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Certificates", href: "#certificates" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <nav className="glass-nav">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 select-none">
          Portfolio.
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none transition-colors"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.substring(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "transition-all duration-300 hover:text-blue-400 relative group",
                    isActive ? "text-blue-400" : "text-gray-400"
                  )}
                >
                  {label}
                  {/* Active Indicator Underline */}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full",
                      isActive && "w-full"
                    )}
                  />
                </a>
              </li>
            );
          })}
          <li className="pl-4 border-l border-white/10">
            <SocialMedia />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#030712] border-b border-white/10">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.substring(1);
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "block py-2 transition-colors",
                  isActive ? "text-blue-400 font-bold" : "text-gray-400 hover:text-white"
                )}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            );
          })}
          <div className="pt-2 border-t border-white/10">
            <SocialMedia />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
