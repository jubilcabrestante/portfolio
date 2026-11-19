"use client";

import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useReduced } from "@/components/motion/useReduced";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/** Endless band that drifts on its own, speeds up and leans with scroll velocity. */
export default function Marquee({ children, speed = 2.5, reverse = false, className }: { children: ReactNode; speed?: number; reverse?: boolean; className?: string }) {
  const reduced = useReduced();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [-2000, 0, 2000], [-4, 0, 4], { clamp: false });
  const skew = useTransform(velocity, [-2500, 0, 2500], [7, 0, -7]);
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(reverse ? -1 : 1);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    let move = direction.current * speed * (delta / 1000);
    const b = boost.get();
    if (b < 0) direction.current = reverse ? 1 : -1;
    else if (b > 0) direction.current = reverse ? -1 : 1;
    move += move * Math.abs(b);
    base.set(base.get() - move);
  });

  return (
    <div className={className} aria-hidden="true">
      <motion.div className="flex w-max whitespace-nowrap will-change-transform" style={{ x, skewX: reduced ? 0 : skew }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </motion.div>
    </div>
  );
}
