import React, { useState } from "react";
import Link from "next/link";
import SocialMedia from "@/components/SocialMedia/SocialMedia";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/about_page" },
    { label: "Projects", href: "/projects/projects_page" },
    { label: "Skills", href: "/skills/skills_page" },
    { label: "Experience", href: "/experience/experience_page" },
    { label: "Certificates", href: "/certificates/certificates_page" },
    { label: "Contact", href: "/contact/contact_page" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-40 py-4 flex items-center justify-between">
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-blue-500 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <SocialMedia />
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 hover:text-blue-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <SocialMedia />
        </div>
      )}
    </nav>
  );
};

export default Navigation;
