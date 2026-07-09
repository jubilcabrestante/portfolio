"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import SectionHeading from "@/components/ui/SectionHeading";

/** Closing call to action and contact directory. */
const ContactSection = () => {
  const { contact } = portfolioData;

  const directory = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    ...contact.socials.map((s) => ({
      label: s.label,
      value: s.href.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""),
      href: s.href,
    })),
  ];

  return (
    <section>
      <SectionHeading kicker="04 · Contact" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="dot-grid mt-8 border border-dashed border-ink/40 px-6 py-12 text-center sm:py-16"
      >
        <p className="font-sketch text-4xl text-ink-soft sm:text-5xl">
          have a <span className="sketch-underline">rough idea</span>?
        </p>
        <h3 className="mt-3 font-headline text-3xl font-black tracking-tight sm:text-4xl">
          Let&rsquo;s turn it into something better.
        </h3>
        <p className="mx-auto mt-4 max-w-xl font-body text-[15px] leading-relaxed text-ink-soft">
          Open to mobile and web development work — projects, collaborations,
          and full-time roles. Every serious message gets a reply, usually
          within the day.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="bg-ink px-20 py-3 font-label text-[13px] font-bold text-paper transition-colors hover:bg-accent"
          >
            Send an email
          </a>
        </div>

        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-baseline justify-center gap-x-6 gap-y-2">
          {directory.map((entry) => (
            <li key={entry.label}>
              <a
                href={entry.href}
                target={entry.href.startsWith("http") ? "_blank" : undefined}
                rel={entry.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-label text-[12px] font-medium text-ink-soft transition-colors hover:text-accent"
              >
                <span className="font-bold">{entry.label}:</span> {entry.value}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-label text-[11px] text-faded">
          Based in {contact.location} · remote-friendly
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
