import React from "react";
import { portfolioData } from "../../data/portfolioData";

const ShortSkills = () => {
  return (
    <section className="py-12 px-4 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-blue-500 inline-block">
          Skills
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-6xl">
          A comprehensive overview of my technical capabilities and areas of
          expertise.
        </p>

        {portfolioData.skills.map((skillGroup, index) => (
          <div key={index} className="mb-8 pt-5">
            {/* Category Title outside the grid */}
            <h3 className="text-2xl font-semibold text-black mb-6">
              {skillGroup.category}
            </h3>

            {/* Grid of individual skill items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroup.items.map((skillItem, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {skillItem.title}
                  </h4>
                  <ul className=" text-gray-600 space-y-1">
                    {skillItem.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShortSkills;
