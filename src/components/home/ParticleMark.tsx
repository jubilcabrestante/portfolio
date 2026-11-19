"use client";

import type { MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

/*
 * The Dzypher mark as a particle field. Geometry is the logo's own 180-unit grid
 * (see components/brand/Logo.tsx): upper half paper, lower half teal, split by a Z channel.
 */
const UPPER = "M34 34H89A56 56 0 0 1 142.7 106H81L122.45 61.5H34Z";
const LOWER = "M34 73H96L55 117H138.1A56 56 0 0 1 89 146H34Z";
const BOX = { x: 34, y: 34, w: 111, h: 112 };
// direction of the Z diagonal (up and to the right), normalised
const CUT = { x: 41 / Math.hypot(41, 44), y: -44 / Math.hypot(41, 44) };

const PAPER = "#f5f7fa";
const TEAL = "#2dd4bf";

type P = { tx: number; ty: number; x: number; y: number; vx: number; vy: number; half: 0 | 1; s: number; ph: number; delay: number };

export default function ParticleMark({ split, className }: { split?: MotionValue<number>; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles: P[] = [];
    let w = 0, h = 0, dpr = 1, scale = 1, ox = 0, oy = 0;
    // the canvas's position in the document, cached so pointer moves never read layout
    let docX = 0, docY = 0;
    let raf = 0, running = false, visible = true;
    let start = performance.now();
    const pointer = { x: -9999, y: -9999, active: false };

    const build = () => {
      const rect = wrap.getBoundingClientRect();
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      docX = rect.left + window.scrollX;
      docY = rect.top + window.scrollY;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      scale = Math.min((w * 0.84) / BOX.w, (h * 0.84) / BOX.h);
      ox = (w - BOX.w * scale) / 2 - BOX.x * scale;
      oy = (h - BOX.h * scale) / 2 - BOX.y * scale;

      // label anchors for the "Web" / "Mobile" captions, in px within the wrapper
      wrap.style.setProperty("--web-x", `${ox + 112 * scale}px`);
      wrap.style.setProperty("--web-y", `${oy + 22 * scale}px`);
      wrap.style.setProperty("--mob-x", `${ox + 34 * scale}px`);
      wrap.style.setProperty("--mob-y", `${oy + 159 * scale}px`);

      // rasterise both halves in marker colours, then sample on a grid
      const off = document.createElement("canvas");
      off.width = Math.ceil(w);
      off.height = Math.ceil(h);
      const o = off.getContext("2d", { willReadFrequently: true });
      if (!o) return;
      o.setTransform(scale, 0, 0, scale, ox, oy);
      o.fillStyle = "#ff0000";
      o.fill(new Path2D(UPPER));
      o.fillStyle = "#00ff00";
      o.fill(new Path2D(LOWER));
      const data = o.getImageData(0, 0, off.width, off.height).data;

      const gap = Math.max(4.6, Math.min(7.5, (BOX.w * scale) / 64));
      const next: P[] = [];
      const spread = Math.max(w, h) * 0.55;
      for (let y = gap / 2; y < h; y += gap) {
        for (let x = gap / 2; x < w; x += gap) {
          const i = (Math.floor(y) * off.width + Math.floor(x)) * 4;
          const red = data[i], green = data[i + 1];
          if (red < 128 && green < 128) continue;
          const half: 0 | 1 = red > green ? 0 : 1;
          const jx = (Math.random() - 0.5) * gap * 0.35;
          const jy = (Math.random() - 0.5) * gap * 0.35;
          const tx = x + jx, ty = y + jy;
          // each half arrives from its own side of the cut
          const dir = half === 0 ? 1 : -1;
          const along = spread * (0.55 + Math.random() * 0.6);
          next.push({
            tx, ty,
            x: reduced ? tx : tx + CUT.x * along * dir + (Math.random() - 0.5) * spread * 0.5,
            y: reduced ? ty : ty + CUT.y * along * dir + (Math.random() - 0.5) * spread * 0.5,
            vx: 0, vy: 0, half,
            s: gap * (0.42 + Math.random() * 0.2),
            ph: Math.random() * Math.PI * 2,
            delay: Math.random() * 420,
          });
        }
      }
      particles = next;
      start = performance.now();
    };

    const draw = (now: number) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const t = now - start;
      const sp = split ? split.get() : 0;
      const gapPx = sp * Math.max(w, h) * 0.22;
      const R = Math.max(70, BOX.w * scale * 0.28);

      for (let pass = 0; pass < 2; pass++) {
        ctx.fillStyle = pass === 0 ? PAPER : TEAL;
        ctx.globalAlpha = 1 - sp * 0.65;
        for (const p of particles) {
          if (p.half !== pass) continue;
          if (!reduced) {
            const dir = p.half === 0 ? 1 : -1;
            const breathe = Math.sin(now * 0.0011 + p.ph) * 0.7;
            const gx = p.tx + CUT.x * gapPx * dir;
            const gy = p.ty + CUT.y * gapPx * dir + breathe;
            const live = t > p.delay;
            const k = live ? 0.055 : 0;
            p.vx += (gx - p.x) * k;
            p.vy += (gy - p.y) * k;
            if (pointer.active) {
              const dx = p.x - pointer.x, dy = p.y - pointer.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < R * R && d2 > 0.01) {
                const d = Math.sqrt(d2);
                const f = (1 - d / R) ** 2 * 7;
                p.vx += (dx / d) * f;
                p.vy += (dy / d) * f;
              }
            }
            p.vx *= 0.82;
            p.vy *= 0.82;
            p.x += p.vx;
            p.y += p.vy;
          }
          ctx.fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    const play = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    build();
    if (reduced) draw(performance.now());
    else play();

    const ro = new ResizeObserver(() => {
      build();
      if (reduced) draw(performance.now());
    });
    ro.observe(wrap);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && document.visibilityState === "visible") play();
      else stop();
    });
    io.observe(wrap);

    const onVisibility = () => (document.visibilityState === "visible" && visible ? play() : stop());
    const onMove = (e: PointerEvent) => {
      if (!visible) return;
      pointer.x = e.pageX - docX;
      pointer.y = e.pageY - docY;
      pointer.active = pointer.x > -40 && pointer.y > -40 && pointer.x < w + 40 && pointer.y < h + 40;
    };
    const onLeave = () => (pointer.active = false);

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [split]);

  return (
    <div ref={wrapRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <span className="mark-label" style={{ left: "var(--web-x)", top: "var(--web-y)" }}>
        <i className="bg-paper" /> Web
      </span>
      <span className="mark-label" style={{ left: "var(--mob-x)", top: "var(--mob-y)" }}>
        <i className="bg-teal" /> Mobile
      </span>
    </div>
  );
}
