import React from "react";
import SocialMedia from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center justify-items-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Jubil - Mobile & Web Developer
        </p>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
