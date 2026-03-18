"use client";

import React from "react";
import * as Icons from "lucide-react";
import type { SkillGroup } from "@/types/skill_types";
import { motion, Variants } from "framer-motion";

type SkillsGridProps = {
  skills: SkillGroup[];
  category?: string;
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, category }) => {
  const filteredSkills = category
    ? skills.filter((group) => group.category === category)
    : skills;

  return (
    <>
      {filteredSkills.map((skillGroup, index) => (
        <motion.div 
          key={index} 
          className="mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <h3 className="text-2xl font-bold text-white mb-6 pl-4 border-l-4 border-blue-500">
            {skillGroup.category}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroup.items.map((skillItem, idx) => {
              const IconComponent =
                skillItem.icon &&
                (Icons as unknown as Record<string, React.ElementType>)[
                  skillItem.icon
                ]
                  ? (Icons as unknown as Record<string, React.ElementType>)[
                      skillItem.icon
                    ]
                  : null;

              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="bg-[#111827] border border-white/10 rounded-2xl p-6 hover:border-teal-500/50 hover:shadow-[0_0_20px_rgba(20,184,166,0.1)] transition-all duration-300 min-h-[200px] flex flex-col group"
                >
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    {IconComponent && (
                      <div className="p-2 bg-blue-500/10 rounded-lg group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                        <IconComponent size={24} className="text-blue-400" />
                      </div>
                    )}
                    {skillItem.title}
                  </h4>
                  <ul className="text-gray-400 space-y-2 flex-grow flex flex-col justify-center">
                    {skillItem.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default SkillsGrid;
