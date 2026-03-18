"use client";

import { portfolioData } from "@/data/portfolioData";
import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center sm:text-left"
      >
        <h2 className="text-subtitle mb-2">Professional Journey</h2>
        <h3 className="text-heading-1 mb-6">
          <span className="text-white">Industry </span>
          <span className="text-gradient-primary">
            Experience
          </span>
        </h3>
        <p className="text-body-large max-w-2xl">
          A chronological overview of my professional roles, highlighting my growth and contributions across different organizations.
        </p>
      </motion.div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] card-premium p-6 md:p-8 ml-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <div>
                  <h3 className="text-heading-3 group-hover:text-blue-400 transition-colors">
                    {exp.position}
                  </h3>
                  {exp.company && (
                    <p className="text-subtitle mt-1">
                      {exp.company}
                    </p>
                  )}
                </div>
                <span className="badge-premium bg-white/5 border-white/10 text-gray-300">
                  {exp.period}
                </span>
              </div>
              <p className="mt-4 text-body leading-relaxed group-hover:text-gray-300 transition-colors">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
