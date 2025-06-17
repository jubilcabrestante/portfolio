import React from "react";
import profileImg from "../../assets/profile.png";

const Header = () => {
  return (
    <header className="text-black pt-15 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-6">
        {/* Left side: Image */}
        <div className="flex justify-center items-center h-full">
          <img
            src={profileImg.src ?? profileImg}
            alt="Profile"
            className="w-100 h-70 rounded-md object-cover"
          />
        </div>

        {/* Right side: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Jubil L. Cabrestante
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Mobile & Web Developer
          </p>
          <div className="mt-4 max-w-2xl mx-auto md:mx-0">
            <p className="text-lg opacity-80">
              With a passion for crafting seamless user experiences, I
              specialize in mobile and Flutter development, ensuring
              high-quality applications through rigorous QA testing.
            </p>
            <a
              href="#projects"
              className="mt-4 inline-block bg-blue-600 text-white hover:bg-blue-700 font-medium px-4 py-2 rounded-lg transition-colors"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
