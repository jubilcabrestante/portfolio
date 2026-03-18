"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import SkillsGrid from "@/components/sections/SkillGrid";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center sm:text-left mb-12"
      >
        <h2 className="text-subtitle mb-2">Technical Arsenal</h2>
        <h3 className="text-heading-1 mb-6">
          <span className="text-white">Core </span>
          <span className="text-gradient-primary">
            Proficiencies
          </span>
        </h3>
        <p className="text-body-large max-w-2xl">
          An interactive breakdown of the languages, frameworks, and tools I use to architect robust digital solutions.
        </p>
      </motion.div>

      <SkillsGrid
        skills={portfolioData.skills.map((group) => ({
          ...group,
          items: group.items.map((item) => ({
            ...item,
            icon: item.icon as keyof typeof Icons,
          })),
        }))}
      />
    </div>
  );
};

export default SkillsSection;
