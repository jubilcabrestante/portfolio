import React from "react";
import { portfolioData } from "@/data/portfolioData";
import SkillsGrid from "@/components/skill_grid"; // adjust path if needed

const ShortSkills = () => {
  return (
    <section className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 inline-block">
          Skills
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-6xl mb-6">
          A comprehensive overview of my technical capabilities and areas of
          expertise.
        </p>

        {/* Display only the Core Skills category */}
        <SkillsGrid
          skills={portfolioData.skills.map((group: any) => ({
            ...group,
            items: group.items.map((item: any) => ({
              ...item,
              icon: item.icon as any,
            })),
          }))}
          category="Core Skills"
        />
      </div>
    </section>
  );
};

export default ShortSkills;
