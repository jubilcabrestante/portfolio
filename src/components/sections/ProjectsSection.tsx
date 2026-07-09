"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectBook from "@/components/ui/ProjectBook";

/** Selected work: every project bound as a small flip-page sketchbook. */
const ProjectsSection = () => {
  return (
    <section>
      <SectionHeading
        kicker="01 · Work"
        title="Selected Work"
        note="each one is a sketchbook — flip through it"
      />

      <div className="mt-6">
        {portfolioData.projects.map((project) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="border-b border-ink/10 py-12 last:border-b-0"
          >
            <div className="grid items-center gap-8 lg:grid-cols-12">
              {/* The write-up */}
              <div className="lg:col-span-4">
                <p className="font-label text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  {project.kicker}
                </p>
                <h3 className="mt-2 font-headline text-3xl font-black leading-tight tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-1.5 font-label text-[12px] font-medium text-faded">
                  {project.year} · {project.role}
                </p>

                <p className="mt-4 font-body text-[15px] leading-relaxed text-ink-soft">
                  {project.summary}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="border border-ink/25 px-2 py-0.5 font-label text-[11px] font-medium text-ink-soft"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block bg-ink px-4 py-2 font-label text-[12px] font-bold text-paper transition-colors hover:bg-accent"
                  >
                    {project.link.label} →
                  </a>
                )}
              </div>

              {/* The sketchbook */}
              <div className="lg:col-span-8">
                <ProjectBook project={project} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
