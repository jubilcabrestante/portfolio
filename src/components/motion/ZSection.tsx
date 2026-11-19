"use client";

import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { useRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { useReduced } from "@/components/motion/useReduced";

type Props = ComponentProps<"section"> & { from?: string; to?: string };

/**
 * A section whose top edge is stepped like the logo's Z channel: a high ledge on the left,
 * a 47° diagonal, and a low ledge on the right. The step slides as the section scrolls in.
 */
export default function ZSection({ children, className, style, from = "74%", to = "40%", ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.2"] });
  const zx = useTransform(scrollYProgress, [0, 1], [from, to]);

  const motionStyle = (reduced ? { ...style, ["--zx" as string]: to } : { ...style, ["--zx" as string]: zx }) as MotionStyle;

  return (
    <motion.section
      ref={ref}
      className={cn("zcut", className)}
      style={motionStyle}
      {...(rest as ComponentProps<typeof motion.section>)}
    >
      {children}
    </motion.section>
  );
}
