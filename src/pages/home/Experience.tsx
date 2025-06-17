import React from "react";
import { portfolioData } from "../../data/portfolioData";

const ShortExperience = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 border-b-2 border-blue-500 inline-block">
          Experience
        </h2>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {exp.position}
                  </h3>
                  {exp.company && (
                    <p className="text-gray-600 font-medium">{exp.company}</p>
                  )}
                </div>
                <span className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="mt-4 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortExperience;
