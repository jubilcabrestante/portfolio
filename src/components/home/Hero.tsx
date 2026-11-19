"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import KineticTitle from "@/components/motion/KineticTitle";
import Magnetic from "@/components/motion/Magnetic";
import Marquee from "@/components/motion/Marquee";
import { Icon } from "@/components/ui/Icon";
import { stackTicker } from "@/data/site";
import ParticleMark from "./ParticleMark";
import { useReduced } from "@/components/motion/useReduced";

function CutGlyph() {
  // the Z channel of the logo, used as the ticker's separator
  return (
    <svg viewBox="0 0 24 24" className="mx-7 size-4 shrink-0 text-teal sm:mx-10" aria-hidden="true">
      <path d="M2 4h13l-8 9h15v7H4l8-9H2V4Z" fill="currentColor" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-22%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 0]);

  return (
    <section ref={ref} id="top" aria-labelledby="hero-title" className="relative isolate min-h-[100svh] overflow-hidden">
      <ParticleMark
        split={scrollYProgress}
        className="absolute inset-x-0 top-[9%] -z-10 h-[38%] lg:inset-x-auto lg:right-[-7%] lg:top-[11%] lg:h-[72%] lg:w-[48%]"
      />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="shell flex min-h-[100svh] flex-col justify-end pb-[22vh] pt-[50svh] lg:justify-center lg:pb-[14vh] lg:pt-32"
      >
        <KineticTitle
          as="h1"
          id="hero-title"
          immediate
          delay={350}
          lines={["Web & mobile", "apps that", "work as one."]}
          className="display-hero"
        />
        <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-12 lg:max-w-[58%]">
          <p className="lede max-w-[29rem] text-haze">
            Dzypher is a <span className="whitespace-nowrap">founder-led</span> studio in Palawan, Philippines. We
            design, build, and maintain iOS and Android apps, web apps, and the backend that connects them.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <a href="#contact" className="btn btn-teal">
              Start a project <Icon name="arrowRight" size={18} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#work" className="btn btn-ghost">
              See our work
            </a>
          </Magnetic>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 border-t border-rule bg-ink py-4">
        <Marquee speed={2.2} className="overflow-hidden">
          {stackTicker.map((item) => (
            <span key={item} className="flex items-center text-[0.9375rem] font-semibold tracking-wide text-haze [font-stretch:112%]">
              {item}
              <CutGlyph />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
