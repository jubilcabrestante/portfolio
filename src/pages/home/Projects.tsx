import React from "react";
import { portfolioData } from "../../data/portfolioData";

const ShortProjects = () => {
  return (
    <section className="py-1 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2  inline-block">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    {project.framework}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortProjects;
