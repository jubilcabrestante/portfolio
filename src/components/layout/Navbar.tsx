"use client";

import React, { useState } from "react";
import Link from "next/link";
import { sections } from "@/data/sections";
import { cn } from "@/lib/utils";

/** Minimal sticky top bar: name on the left, sections and résumé on the right. */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-sm print:hidden">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3.5"
      >
        <Link
          href="/#top"
          onClick={() => setOpen(false)}
          className="font-headline text-[15px] font-black tracking-tight"
        >
          Jubil L. Cabrestante
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 sm:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                className="font-label text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Resume-Cabrestante.pdf"
              download
              className="border border-ink px-3.5 py-1.5 font-label text-[12px] font-bold transition-colors hover:bg-ink hover:text-paper"
            >
              Résumé
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="font-label text-[13px] font-semibold sm:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu {open ? "−" : "+"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-ink/10 px-5 py-2 sm:hidden">
          {sections.map(({ id, label }) => (
            <li key={id} className="border-b border-ink/10 last:border-b-0">
              <a
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-label text-sm font-medium text-ink-soft"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Resume-Cabrestante.pdf"
              download
              onClick={() => setOpen(false)}
              className={cn("block py-2.5 font-label text-sm font-bold text-accent")}
            >
              Résumé (PDF)
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
