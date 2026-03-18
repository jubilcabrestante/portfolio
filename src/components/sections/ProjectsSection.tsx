"use client";

import ProjectCard from "@/components/ui/ProjectCard";
import { portfolioData } from "@/data/portfolioData";
import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center lg:text-left"
      >
        <h2 className="text-subtitle mb-2">Portfolio</h2>
        <h3 className="text-heading-1 mb-6">
          <span className="text-white">Featured </span>
          <span className="text-gradient-primary">Work</span>
        </h3>
        <p className="text-body-large max-w-2xl mx-auto lg:mx-0">
          A highly curated selection of my finest architectural and frontend creations. Explore the depth of design systems, fluid animations, and robust backend integrations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
