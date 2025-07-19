"use client";

import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import ShortAbout from "./_components/about";
import ShortExperience from "./_components/experience";
import Header from "./_components/header";
import ShortProjects from "./_components/projects";
import ShortSkills from "./_components/skill";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 space-y-24">
        <SectionWrapper>
          <Header />
        </SectionWrapper>

        {[ShortAbout, ShortProjects, ShortSkills, ShortExperience].map(
          (Component, i) => (
            <SectionWrapper key={i}>
              <Component />
            </SectionWrapper>
          )
        )}
      </main>
    </div>
  );
};

export default HomePage;
