import { portfolioData } from "@/data/portfolioData";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2  inline-block">
        About Me
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-6xl">
        {portfolioData.about.content}
      </p>
    </div>
  );
};

export default AboutPage;
