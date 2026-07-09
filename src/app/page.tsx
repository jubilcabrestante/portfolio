import React from "react";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-24 px-5 pb-8">
      <div id="top" className="scroll-mt-20">
        <Hero />
      </div>

      <div id="work" className="scroll-mt-20">
        <ProjectsSection />
      </div>

      <div id="skills" className="scroll-mt-20">
        <SkillsSection />
      </div>

      <div id="experience" className="scroll-mt-20">
        <ExperienceSection />
      </div>

      <div id="contact" className="scroll-mt-20">
        <ContactSection />
      </div>
    </div>
  );
}
