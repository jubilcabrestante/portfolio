"use client";

import { useEffect, useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";

// resting letterform: already heavy, so touch screens see a bold headline too
const REST = { wght: 760, wdth: 100 };

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  id?: string;
  radius?: number;
};

/**
 * Letters thicken and widen as the pointer nears them, using Archivo's weight and width axes.
 * Static for touch and reduced motion.
 */
export default function ProximityText({ text, as: Tag = "h2", className, id, radius = 260 }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const letters = Array.from(node.querySelectorAll<HTMLSpanElement>("[data-letter]"));
    let centers: { x: number; y: number }[] = [];
    let px = -9999, py = -9999, raf = 0, active = false;

    const measure = () => {
      centers = letters.map((el) => {
        el.style.fontVariationSettings = `"wght" ${REST.wght}, "wdth" ${REST.wdth}`;
        const r = el.getBoundingClientRect();
        return { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY };
      });
    };
    const render = () => {
      raf = 0;
      letters.forEach((el, i) => {
        const c = centers[i];
        const d = Math.hypot(px - c.x, py - c.y);
        const t = Math.max(0, 1 - d / radius);
        const ease = t * t * (3 - 2 * t);
        el.style.fontVariationSettings = `"wght" ${Math.round(REST.wght + (900 - REST.wght) * ease)}, "wdth" ${Math.round(REST.wdth + (125 - REST.wdth) * ease)}`;
      });
    };
    const onMove = (e: PointerEvent) => {
      px = e.pageX;
      py = e.pageY;
      if (!active) return;
      if (!raf) raf = requestAnimationFrame(render);
    };
    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) measure();
    });
    io.observe(node);
    measure();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", measure);
    };
  }, [radius]);

  return (
    <Tag ref={ref} id={id} className={cn(className)} aria-label={text}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split("").map((ch, ci) => (
            <span key={ci} data-letter className="inline-block" style={{ fontVariationSettings: `"wght" ${REST.wght}, "wdth" ${REST.wdth}` }}>
              {ch}
            </span>
          ))}
          {wi < text.split(" ").length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
