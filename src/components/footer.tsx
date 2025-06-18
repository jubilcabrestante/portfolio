import React from "react";
import SocialMedia from "./socials";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Jubil - Mobile & Web Developer</p>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;
