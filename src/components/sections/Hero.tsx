"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

const steps = [
  {
    n: "01",
    title: "Sketch",
    text: "Every product starts rough — a napkin idea, a business problem, a hunch.",
    solid: false,
  },
  {
    n: "02",
    title: "Sharpen",
    text: "I question the brief until the idea is simpler, clearer, and more useful.",
    solid: false,
  },
  {
    n: "03",
    title: "Ship",
    text: "Engineered with clean architecture, tested on real devices, built to grow.",
    solid: true,
  },
];

const facts = [
  "4 shipped projects",
  "Live on Google Play",
  "Best Capstone Project Paper — PSU 2025",
];

/** Opening statement: rough ideas in, robust systems out. */
const Hero = () => {
  const { frontPage } = portfolioData;

  return (
    <section className="pt-14 sm:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <p className="font-label text-xs font-bold uppercase tracking-[0.14em] text-accent">
            {frontPage.kicker}
          </p>

          <h1 className="mt-5 leading-none">
            <span className="block font-sketch text-4xl text-ink-soft sm:text-5xl md:text-6xl">
              Hi, I&rsquo;m <span className="sketch-underline">Jubil</span> —
            </span>
            <span className="mt-3 block font-headline text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              I turn rough ideas into robust systems.
            </span>
          </h1>

          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-ink-soft">
            {frontPage.subhead}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="bg-ink px-6 py-3 font-label text-[13px] font-bold text-paper transition-colors hover:bg-accent"
            >
              See the work ↓
            </a>
            <a
              href="/Resume-Cabrestante.pdf"
              download
              className="border border-ink px-6 py-3 font-label text-[13px] font-bold transition-colors hover:bg-ink hover:text-paper"
            >
              Download résumé
            </a>
          </div>

          <p className="mt-8 font-label text-[12px] font-medium text-faded">
            {facts.join("  ·  ")}
          </p>
        </motion.div>

        {/* Portrait, pinned like a photo on a sketchboard */}
        <motion.figure
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mx-auto w-64 max-w-full lg:col-span-4 lg:w-full"
        >
          <div className="relative">
            <div
              aria-hidden
              className="blueprint-panel absolute inset-0 translate-x-3 translate-y-3 rotate-1"
            />
            <div className="dot-grid relative -rotate-1 border border-dashed border-ink/40 bg-paper p-3 transition-transform duration-300 hover:rotate-0">
              <div className="portrait relative aspect-[4/5] overflow-hidden">
                <Image
                  src={frontPage.portrait.src}
                  alt="Portrait of Jubil L. Cabrestante"
                  fill
                  sizes="(min-width: 1024px) 28vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>
              <span aria-hidden className="tape -top-2.5 left-4 -rotate-6" />
              <span aria-hidden className="tape -top-2.5 right-4 rotate-3" />
            </div>
          </div>
          <figcaption className="mt-3 text-center font-sketch text-xl text-ink-soft">
            {frontPage.portrait.caption}
          </figcaption>
        </motion.figure>
      </div>

      {/* About */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="mt-16 max-w-3xl space-y-4 border-l-2 border-ink/15 pl-6"
      >
        {frontPage.lede.map((paragraph, i) => (
          <p key={i} className="font-body text-[15px] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Sketch → Sharpen → Ship */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="mt-16"
      >
        <p className="font-sketch text-2xl text-ink-soft">
          how ideas get better here →
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className={
                step.solid
                  ? "border-2 border-ink bg-paper-deep/60 p-5"
                  : "border border-dashed border-ink/45 p-5"
              }
            >
              <p className="font-sketch text-2xl text-accent">{step.n}</p>
              <p className="mt-1 font-headline text-lg font-black">{step.title}</p>
              <p className="mt-2 font-body text-[14px] leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
