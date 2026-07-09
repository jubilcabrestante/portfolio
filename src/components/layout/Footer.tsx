import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { sections } from "@/data/sections";

/** Minimal footer. */
const Footer = () => {
  const { paper } = portfolioData;

  return (
    <footer className="mx-auto mt-24 max-w-5xl px-5 pb-10 print:hidden">
      <div className="rule-hair" />
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pt-6">
        <p className="font-label text-[12px] text-faded">
          © {new Date().getFullYear()} {paper.name} · {paper.place} · Built
          with Next.js
        </p>
        <ul className="flex flex-wrap items-baseline gap-x-5">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                className="font-label text-[12px] font-medium text-ink-soft transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
