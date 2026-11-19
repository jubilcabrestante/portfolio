"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import KineticTitle from "@/components/motion/KineticTitle";
import { storySteps } from "@/data/site";
import { cn } from "@/lib/utils";
import LinkedDevices, { type Stage } from "./LinkedDevices";
import { useReduced } from "@/components/motion/useReduced";

function stageAt(p: number): Stage {
  if (p < 0.3) return 0;
  if (p < 0.4) return 1;
  if (p < 0.66) return 2;
  return 3;
}

export default function Story() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [stage, setStage] = useState<Stage>(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const next = stageAt(p);
    setStage((current) => (current === next ? current : next));
  });

  const browserX = useTransform(scrollYProgress, [0, 0.2], ["-16%", "0%"]);
  const browserOpacity = useTransform(scrollYProgress, [0, 0.12], [0.15, 1]);
  const phoneX = useTransform(scrollYProgress, [0, 0.22], ["14%", "0%"]);
  const phoneY = useTransform(scrollYProgress, [0, 0.22], ["24%", "0%"]);
  const phoneRotate = useTransform(scrollYProgress, [0, 0.22], [8, 0]);
  const rail = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  const activeStep = stage <= 1 ? 0 : stage === 2 ? 1 : 2;

  if (reduced) {
    return (
      <section ref={ref} id="system" aria-labelledby="system-title" className="section-y">
        <div className="shell grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 id="system-title" className="display-xl">
              <span className="block">Two halves.</span>
              <span className="block">One system.</span>
            </h2>
            <ol className="mt-10 grid gap-6">
              {storySteps.map((step, index) => (
                <li key={step.title}>
                  <p className="title">
                    {index + 1}. {step.title}
                  </p>
                  <p className="mt-2 text-haze">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <LinkedDevices stage={3} />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} id="system" aria-labelledby="system-title" className="relative h-[340vh]">
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="shell grid items-center gap-8 pt-16 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14 lg:pt-10">
          <div>
            <KineticTitle id="system-title" lines={["Two halves.", "One system."]} className="display-xl" />

            <div className="relative mt-8 grid grid-cols-[2px_1fr] gap-x-6 lg:mt-12">
              <div className="relative overflow-hidden rounded-full bg-rule">
                <motion.div className="absolute inset-0 origin-top rounded-full bg-teal" style={{ scaleY: rail }} />
              </div>
              <ol className="grid gap-5 lg:gap-7">
                {storySteps.map((step, index) => {
                  const active = index === activeStep;
                  return (
                    <li
                      key={step.title}
                      aria-current={active ? "step" : undefined}
                      className={cn(
                        "transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)]",
                        active ? "opacity-100" : "opacity-30",
                        !active && "hidden lg:block",
                      )}
                    >
                      <p className="title flex gap-3">
                        <span className="tabular text-teal">0{index + 1}</span>
                        {step.title}
                      </p>
                      <p className="mt-2 max-w-[26rem] pl-[2.1em] text-[0.9375rem] leading-relaxed text-haze">{step.text}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>

          <div className="relative">
            <LinkedDevices
              stage={stage}
              browserStyle={{ x: browserX, opacity: browserOpacity }}
              phoneStyle={{ x: phoneX, y: phoneY, rotate: phoneRotate }}
            />
            <p className="mt-4 text-[0.8125rem] text-haze">Recreated from the real Suki apps with sample data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
