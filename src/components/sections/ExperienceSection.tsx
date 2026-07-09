"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";

/** Experience as a simple timeline, most recent first. */
const ExperienceSection = () => {
  return (
    <section>
      <SectionHeading kicker="03 · Experience" title="Experience" />

      <div className="mt-8 max-w-3xl border-l-2 border-ink/15">
        {portfolioData.dispatches.map((dispatch, i) => (
          <motion.article
            key={`${dispatch.company}-${dispatch.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative pb-10 pl-8 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-paper bg-accent"
            />
            <p className="font-label text-[11px] font-semibold uppercase tracking-[0.08em] text-faded">
              {dispatch.period} · {dispatch.dateline}
            </p>
            <h3 className="mt-1.5 font-headline text-xl font-black leading-tight">
              {dispatch.position}
            </h3>
            <p className="mt-0.5 font-label text-[13px] font-semibold text-accent">
              {dispatch.company}
            </p>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-ink-soft">
              {dispatch.body}
            </p>

            {dispatch.certificate && (
              <a
                href={dispatch.certificate.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-block"
              >
                <span className="block w-44 border border-dashed border-ink/40 bg-paper p-1.5 transition-colors group-hover:border-accent">
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={dispatch.certificate.src}
                      alt={dispatch.certificate.label}
                      fill
                      sizes="176px"
                      className="object-contain"
                    />
                  </span>
                </span>
                <span className="mt-1.5 block font-label text-[11px] font-medium text-ink-soft group-hover:text-accent">
                  {dispatch.certificate.label} ↗
                </span>
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
