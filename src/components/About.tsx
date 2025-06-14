import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
          About Me
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-6xl">
          {portfolioData.about.content}
        </p>
      </div>
    </section>
  );
};

export default About;