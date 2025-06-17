import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Jubil - Mobile & Web Developer</p>
        <div className="mt-4">
          <a 
            href="#" 
            className="text-blue-300 hover:text-white mx-2 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="#" 
            className="text-blue-300 hover:text-white mx-2 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="#" 
            className="text-blue-300 hover:text-white mx-2 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;