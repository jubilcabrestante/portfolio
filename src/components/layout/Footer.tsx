import React from "react";
import SocialMedia from "@/components/ui/SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/10 text-gray-400 py-12 relative z-10 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 select-none mb-6">
          Portfolio.
        </div>
        
        <div className="flex justify-center mb-6">
          <SocialMedia />
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} Jubil L. Cabrestante. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
