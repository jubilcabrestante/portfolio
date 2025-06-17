import React from "react";
import { portfolioData } from "@/data/portfolioData";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SkillsGrid from "@/components/skill_grid"; // Make sure path is correct
import * as Icons from "lucide-react"; // for icon typings if needed

const SkillsPage = () => {
  return (
    <>
      <Navigation />
      <section className="flex-grow px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 inline-block">
            Skills
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-6xl mb-6">
            A comprehensive overview of my technical capabilities and areas of
            expertise.
          </p>

          {/* ✅ Use SkillsGrid without category to show all skills */}
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
      </section>
      <Footer />
    </>
  );
};

export default SkillsPage;
