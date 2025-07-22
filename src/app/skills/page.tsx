import React from "react";
import { portfolioData } from "@/data/portfolioData";
import SkillsGrid from "@/components/SkillGrid";
import * as Icons from "lucide-react";

const SkillsPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 inline-block">
          Skills
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-6xl mb-6">
          A comprehensive overview of my technical capabilities and areas of
          expertise.
        </p>
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
    </>
  );
};

export default SkillsPage;
