import React from "react";
import { portfolioData } from "../../data/portfolioData";

const ShortAbout = () => {
  return (
    <section className="py-1 px-4 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2  inline-block">
          About Me
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-6xl">
          {portfolioData.about.content}
        </p>
        <a
          href=""
          className="bg-gray-200 rounded-2xl px-3 text-black font-semibold mt-4 inline-block hover:bg-gray-400 transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default ShortAbout;
