// components/skill_grid.tsx
import React from "react";
import * as Icons from "lucide-react";

type SkillItem = {
  title: string;
  icon?: keyof typeof Icons;
  description: string[];
};

type SkillGroup = {
  category: string;
  items: SkillItem[];
};

type SkillsGridProps = {
  skills: SkillGroup[];
  category?: string;
};

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, category }) => {
  const filteredSkills = category
    ? skills.filter((group) => group.category === category)
    : skills;

  return (
    <>
      {filteredSkills.map((skillGroup, index) => (
        <div key={index} className="mb-8 pt-5">
          <h3 className="text-2xl font-semibold text-black mb-6">
            {skillGroup.category}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    {IconComponent && (
                      <IconComponent size={24} className="text-black" />
                    )}
                    {skillItem.title}
                  </h4>
                  <ul className="text-gray-600 space-y-1">
                    {skillItem.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsGrid;
