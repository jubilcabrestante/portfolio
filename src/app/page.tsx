// HomePage.tsx or PortfolioPage.tsx

"use client";

import React from "react";
import SectionWrapper from "@/components/SectionWrapper";
import Header from "./header/header";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";
import ExperiencePage from "./experience/page";
import CertificatePage from "./certificates/page";
import ContactPage from "./contact/page";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 space-y-24">
        <SectionWrapper id="header" className="scroll-mt-28">
          <Header />
        </SectionWrapper>

        <SectionWrapper id="about" className="scroll-mt-28">
          <AboutPage />
        </SectionWrapper>

        <SectionWrapper id="projects" className="scroll-mt-28">
          <ProjectsPage />
        </SectionWrapper>

        <SectionWrapper id="skills" className="scroll-mt-28">
          <SkillsPage />
        </SectionWrapper>

        <SectionWrapper id="experience" className="scroll-mt-28">
          <ExperiencePage />
        </SectionWrapper>

        <SectionWrapper id="certificates" className="scroll-mt-28">
          <CertificatePage />
        </SectionWrapper>

        <SectionWrapper id="contact" className="scroll-mt-28">
          <ContactPage />
        </SectionWrapper>
      </main>
    </div>
  );
};

export default HomePage;
