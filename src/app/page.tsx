// HomePage.tsx or PortfolioPage.tsx

"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionWrapper from "@/components/ui/SectionWrapper";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

// Lazy-load heavier below-the-fold sections for optimized performance
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"), { ssr: true });
const CertificateSection = dynamic(() => import("@/components/sections/CertificateSection"), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"), { ssr: true });

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 space-y-24">
        <SectionWrapper id="header" className="scroll-mt-28">
          <HeroSection />
        </SectionWrapper>

        <SectionWrapper id="about" className="scroll-mt-28">
          <AboutSection />
        </SectionWrapper>

        <SectionWrapper id="projects" className="scroll-mt-28">
          <ProjectsSection />
        </SectionWrapper>

        <SectionWrapper id="skills" className="scroll-mt-28">
          <SkillsSection />
        </SectionWrapper>

        <SectionWrapper id="experience" className="scroll-mt-28">
          <ExperienceSection />
        </SectionWrapper>

        <SectionWrapper id="certificates" className="scroll-mt-28">
          <CertificateSection />
        </SectionWrapper>

        <SectionWrapper id="contact" className="scroll-mt-28">
          <ContactSection />
        </SectionWrapper>
      </main>
    </div>
  );
};

export default HomePage;
