"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { nav, studio } from "@/data/site";
import { useReduced } from "@/components/motion/useReduced";

const WORD = "DZYPHER";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

/** Hovering the wordmark "deciphers" it: letters scramble, then resolve left to right. */
function useDecipher() {
  const [text, setText] = useState(WORD);
  const timer = useRef<number | null>(null);
  const run = useCallback(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (timer.current) window.clearInterval(timer.current);
    let frame = 0;
    timer.current = window.setInterval(() => {
      frame += 1;
      setText(
        WORD.split("")
          .map((ch, i) => (frame > i * 3 + 4 ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join(""),
      );
      if (frame > WORD.length * 3 + 4 && timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
    }, 38);
  }, []);
  useEffect(() => () => {
    if (timer.current) window.clearInterval(timer.current);
  }, []);
  return { text, run };
}

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReduced();
  const { text, run } = useDecipher();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const rise = useTransform(scrollYProgress, [0, 1], [reduced ? "0%" : "38%", "0%"]);

  return (
    <footer ref={ref} className="zcut relative overflow-hidden bg-ink" style={{ ["--zx" as string]: "42%" }}>
      <div className="shell grid gap-12 pb-6 pt-20 md:grid-cols-[1.2fr_1fr] md:items-end">
        <div>
          <p className="title max-w-[22rem]">Web and mobile apps, designed and built in Puerto Princesa, Palawan.</p>
          <a href={`mailto:${studio.email}`} className="mt-4 inline-block text-haze transition-colors hover:text-teal">
            {studio.email}
          </a>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-[0.9375rem] sm:grid-cols-3 md:justify-self-end">
          <ul className="grid gap-2">
            {[...nav, { href: "/#contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-haze transition-colors hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="grid content-start gap-2">
            {studio.socials.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" className="text-haze transition-colors hover:text-paper">
                  {social.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="col-span-2 text-[0.8125rem] text-haze sm:col-span-1">© {new Date().getFullYear()} Dzypher</p>
        </nav>
      </div>

      <Link
        href="/"
        aria-label="Dzypher home"
        onPointerEnter={run}
        onFocus={run}
        className="block select-none overflow-hidden px-2 pb-[1.5vw] pt-4 sm:px-4"
      >
        <motion.span
          aria-hidden="true"
          style={{ y: rise }}
          className="block whitespace-nowrap text-center text-[15.2vw] font-[900] leading-[0.9] tracking-[-0.03em] text-paper [font-stretch:125%]"
        >
          {text}
        </motion.span>
      </Link>
    </footer>
  );
}
