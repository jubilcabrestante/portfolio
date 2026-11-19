"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import KineticTitle from "@/components/motion/KineticTitle";
import ZSection from "@/components/motion/ZSection";
import { Icon, type IconName } from "@/components/ui/Icon";
import { process } from "@/data/site";
import { useReduced } from "@/components/motion/useReduced";

const ICONS: IconName[] = ["search", "layers", "box", "arrowUpRight", "bell"];

function StepCard({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <li className="flex w-[min(80vw,25rem)] shrink-0 flex-col rounded-card bg-white p-7 ring-1 ring-rule-light sm:p-9 md:h-[min(58svh,30rem)] md:w-[min(34vw,27rem)]">
      <div className="flex items-start justify-between">
        <span className="tabular outline-text text-[clamp(4rem,3rem+3vw,6.5rem)] font-[850] leading-none text-ink [font-stretch:118%]">
          0{index + 1}
        </span>
        <span className="grid size-12 place-items-center rounded-full bg-ink text-teal">
          <Icon name={ICONS[index]} size={20} />
        </span>
      </div>
      <h3 className="mt-auto pt-10 text-[clamp(1.6rem,1.2rem+1.2vw,2.4rem)] font-[850] uppercase leading-none tracking-[-0.02em] [font-stretch:115%]">
        {title}
      </h3>
      <p className="mt-4 text-[1rem] leading-relaxed text-slate">{text}</p>
    </li>
  );
}

export default function Process() {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const reduced = useReduced();
  const [distance, setDistance] = useState(0);
  const [wide, setWide] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const apply = () => setWide(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  const pinned = wide && !reduced;

  // measure the track once it is laid out as a row
  useEffect(() => {
    if (!pinned) return;
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  return (
    <ZSection id="process" aria-labelledby="process-title" className="on-paper bg-paper text-ink" from="66%" to="36%">
      <div ref={section} className={pinned ? "relative h-[300vh]" : "relative"}>
        <div className={pinned ? "sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden" : "section-y"}>
          <div className="shell grid gap-6 lg:grid-cols-2 lg:items-end">
            <KineticTitle id="process-title" lines={["How we", "work."]} className="display-xl" />
            <p className="lede max-w-[30rem] text-slate">
              Five steps, from the first conversation to life after launch. You see working software early and often.
            </p>
          </div>

          <motion.ol
            ref={track}
            style={pinned ? { x } : undefined}
            className={
              pinned
                ? "mt-12 flex gap-5 pl-[max(2rem,calc((100vw-84rem)/2))] pr-8"
                : "shell mt-12 grid gap-4 sm:grid-cols-2 [&>li]:w-full"
            }
          >
            {process.map((step, index) => (
              <StepCard key={step.title} index={index} title={step.title} text={step.text} />
            ))}
          </motion.ol>

          {pinned && (
            <div className="shell mt-10">
              <div className="h-[3px] overflow-hidden rounded-full bg-rule-light">
                <motion.div style={{ scaleX: bar }} className="h-full origin-left rounded-full bg-ink" />
              </div>
            </div>
          )}
        </div>
      </div>
    </ZSection>
  );
}
