"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";

/** Skills as a simple three-column board of cards. */
const SkillsSection = () => {
  return (
    <section>
      <SectionHeading
        kicker="02 · Skills"
        title="Skills & Capabilities"
        note="the toolbox, honestly labelled"
      />

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {portfolioData.classifieds.map((column, colIndex) => (
          <motion.div
            key={column.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: colIndex * 0.1 }}
          >
            <p className="font-label text-xs font-bold uppercase tracking-[0.12em] text-faded">
              {column.category}
            </p>

            <div className="mt-4 space-y-4">
              {column.ads.map((ad) => (
                <div
                  key={ad.heading}
                  className="border border-ink/20 p-4 transition-colors hover:border-ink/50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-headline text-[15px] font-black leading-tight">
                      {ad.heading}
                    </h3>
                    {ad.tag && (
                      <span
                        className={
                          ad.tag === "CORE"
                            ? "shrink-0 bg-accent px-1.5 py-0.5 font-label text-[9px] font-bold uppercase tracking-[0.08em] text-paper"
                            : "shrink-0 border border-dashed border-accent px-1.5 py-0.5 font-label text-[9px] font-bold uppercase tracking-[0.08em] text-accent"
                        }
                      >
                        {ad.tag}
                      </span>
                    )}
                  </div>
                  <ul className="mt-2.5 space-y-1.5">
                    {ad.lines.map((line, i) => (
                      <li
                        key={i}
                        className="font-body text-[13.5px] leading-snug text-ink-soft"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
