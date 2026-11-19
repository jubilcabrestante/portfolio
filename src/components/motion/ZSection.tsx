"use client";

import { useInView } from "framer-motion";
import { useRef, type ComponentProps, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"section"> & { from?: string; to?: string };

/**
 * A section whose top edge is stepped like the logo's Z channel: a high ledge on the left,
 * a 47° diagonal, and a low ledge on the right. The step slides into place once, by CSS
 * transition, when the section first comes into view; nothing runs per scroll frame.
 */
export default function ZSection({ children, className, style, from = "74%", to = "40%", ...rest }: Props) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  return (
    <section
      ref={ref}
      className={cn("zcut", className)}
      style={{ ...style, ["--zx" as string]: inView ? to : from } as CSSProperties}
      {...rest}
    >
      {children}
    </section>
  );
}
