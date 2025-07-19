import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import ProjectCard from "@/components/ProjectCard";

const ShortProjects = () => {
  return (
    <section className="py-1 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 inline-block">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={{
                ...project,
                images: project.images.map((img: string) => ({
                  src: img,
                  type: img.includes("mobile") ? "mobile" : "desktop",
                })),
              }}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShortProjects;
