import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolioData";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-2 inline-block">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
