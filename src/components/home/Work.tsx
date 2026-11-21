"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import KineticTitle from "@/components/motion/KineticTitle";
import Marquee from "@/components/motion/Marquee";
import ZSection from "@/components/motion/ZSection";
import { Icon } from "@/components/ui/Icon";
import { suki, tagaCuyo } from "@/data/site";
import { cn } from "@/lib/utils";
import { useReduced } from "@/components/motion/useReduced";

const ease = [0.16, 1, 0.3, 1] as const;
const bandWords = ["Web apps", "Mobile apps", "Dashboards", "Online stores", "APIs", "Admin tools"];

function useTicker(ref: React.RefObject<HTMLElement | null>, count: number, interval: number) {
  const inView = useInView(ref, { amount: 0.3 });
  const reduced = useReduced();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!inView || reduced) return;
    const timer = window.setInterval(() => setStep((s) => (s + 1) % count), interval);
    return () => window.clearInterval(timer);
  }, [inView, reduced, count, interval]);
  return { step, inView, reduced: !!reduced };
}

/* ---------- Suki: mobile and web apps on one backend ---------- */
// Map geometry in SVG units. Cards are wide enough for the longest job line
// (about 202 units at 11.5px), so no description runs past its card.
const MAP_W = 760;
const MAP_H = 406;
const ROWS = [92, 220, 348]; // row centres shared by both columns (three apps a side)
const CARD_W = 236;
const HUB_W = 152;
const HUB_X = (MAP_W - HUB_W) / 2;
const HUB_CX = MAP_W / 2;
const LEFT_END = 20 + CARD_W; // right edge of the mobile cards
const RIGHT_X = MAP_W - 20 - CARD_W; // left edge of the web cards

function SukiMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { inView, reduced } = useTicker(ref, 1, 100000);
  const show = inView || reduced;
  const leftPaths = ROWS.map((y) => `M${LEFT_END} ${y} C ${LEFT_END + 26} ${y}, ${HUB_X - 24} 220, ${HUB_X} 220`);
  const rightPaths = ROWS.map((y) => `M${RIGHT_X} ${y} C ${RIGHT_X - 26} ${y}, ${HUB_X + HUB_W + 24} 220, ${HUB_X + HUB_W} 220`);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="w-full" role="img" aria-label="Suki system map: three Kotlin Multiplatform mobile apps and three Next.js web apps connected to one Supabase backend.">
        <text x="20" y="40" fontSize="13" fontWeight="700" fill="#586170">Kotlin mobile apps</text>
        <text x={MAP_W - 20} y="40" fontSize="13" fontWeight="700" fill="#586170" textAnchor="end">Next.js web apps</text>

        {[...leftPaths, ...rightPaths].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="#0e1117"
            strokeOpacity="0.22"
            strokeWidth="2"
            initial={{ pathLength: reduced ? 1 : 0 }}
            animate={{ pathLength: show ? 1 : 0 }}
            transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.07 }}
          />
        ))}

        {inView &&
          !reduced &&
          [...leftPaths, ...rightPaths].map((d, i) => (
            <circle key={`pulse-${d}`} r="4" fill="#0f766e">
              <animateMotion
                dur={`${2 + (i % 3) * 0.35}s`}
                begin={`${1 + i * 0.27}s`}
                repeatCount="indefinite"
                path={d}
                keyPoints={i % 2 ? "1;0" : "0;1"}
                keyTimes="0;1"
                calcMode="linear"
              />
            </circle>
          ))}

        {suki.mobileApps.map((app, i) => (
          <motion.g key={app.name} initial={{ opacity: reduced ? 1 : 0, x: reduced ? 0 : -16 }} animate={show ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.08 }}>
            <rect x="20" y={ROWS[i] - 28} width={CARD_W} height="56" rx="14" fill="#fff" stroke="#dce1e7" />
            <text x="38" y={ROWS[i] - 4} fontSize="15" fontWeight="800" fill="#0e1117">{app.name}</text>
            <text x="38" y={ROWS[i] + 15} fontSize="11.5" fill="#586170">{app.job}</text>
          </motion.g>
        ))}
        {suki.webApps.map((app, i) => (
          <motion.g key={app.name} initial={{ opacity: reduced ? 1 : 0, x: reduced ? 0 : 16 }} animate={show ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.08 }}>
            <rect x={RIGHT_X} y={ROWS[i] - 28} width={CARD_W} height="56" rx="14" fill="#fff" stroke="#dce1e7" />
            <text x={RIGHT_X + 18} y={ROWS[i] - 4} fontSize="15" fontWeight="800" fill="#0e1117">{app.name}</text>
            <text x={RIGHT_X + 18} y={ROWS[i] + 15} fontSize="11.5" fill="#586170">{app.job}</text>
          </motion.g>
        ))}

        <motion.g initial={{ scale: reduced ? 1 : 0.85, opacity: reduced ? 1 : 0 }} animate={show ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease }} style={{ transformOrigin: `${HUB_CX}px 220px` }}>
          <rect x={HUB_X} y="150" width={HUB_W} height="140" rx="22" fill="#0e1117" />
          <text x={HUB_CX} y="198" textAnchor="middle" fontSize="17" fontWeight="800" fill="#f5f7fa">One backend</text>
          <text x={HUB_CX} y="222" textAnchor="middle" fontSize="13" fontWeight="700" fill="#2dd4bf">Supabase</text>
          <text x={HUB_CX} y="244" textAnchor="middle" fontSize="11.5" fill="#9aa3b1">Postgres + Realtime</text>
          <text x={HUB_CX} y="262" textAnchor="middle" fontSize="11.5" fill="#9aa3b1">28 Edge Functions</text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ---------- Taga-Cuyo: two languages, one app ---------- */
const PHRASES = [
  { lang: "Tagalog", text: "Magandang araw!" },
  { lang: "Cuyonon", text: "Mayad nga adlaw!" },
];

function TagaFan() {
  const ref = useRef<HTMLDivElement>(null);
  const { step, inView, reduced } = useTicker(ref, 2, 2600);
  const open = inView || reduced;
  const phrase = PHRASES[reduced ? 1 : step];
  return (
    <div ref={ref} className="flex w-full flex-col items-center">
      <div className="mb-8 flex h-14 items-center gap-3 overflow-hidden" aria-hidden="true">
        <span className="rounded-full bg-teal px-3 py-1 text-[0.75rem] font-[800] text-ink">{phrase.lang}</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={phrase.text}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="block text-[clamp(1.4rem,1rem+1.4vw,2.2rem)] font-[850] uppercase tracking-[-0.02em] [font-stretch:110%]"
          >
            {phrase.text}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="relative flex h-[19rem] w-full max-w-[26rem] items-end justify-center sm:h-[22rem]">
        {tagaCuyo.screens.map((screen, i) => {
          const offset = i - 1;
          return (
            <motion.div
              key={screen.src}
              className="absolute bottom-0 w-[38%] overflow-hidden rounded-[1.2rem] bg-ink p-1 shadow-[0_30px_50px_-30px_rgb(0_0_0/0.8)]"
              initial={{ rotate: 0, x: "0%", y: 0 }}
              animate={open ? { rotate: offset * 9, x: `${offset * 72}%`, y: Math.abs(offset) * 18 } : { rotate: 0, x: "0%", y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
              style={{ zIndex: i === 1 ? 2 : 1, transformOrigin: "50% 100%" }}
            >
              <Image src={screen.src} alt={screen.alt} width={607} height={1350} sizes="(min-width: 768px) 160px, 30vw" className="h-auto w-full rounded-[1rem]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Stacked deck ---------- */
type CardProps = {
  index: number;
  total: number;
  progress: MotionValue<number>;
  tone: "paper" | "teal" | "ink";
  children: ReactNode;
};

function DeckCard({ index, total, progress, tone, children }: CardProps) {
  const reduced = useReduced();
  const target = 1 - (total - index) * 0.045;
  const scale = useTransform(progress, [index / total, 1], [1, reduced ? 1 : target]);
  const dim = useTransform(progress, [index / total, 1], [0, reduced ? 0 : (total - 1 - index) * 0.18]);

  return (
    <div className="md:sticky md:top-0 md:flex md:h-[100svh] md:items-center">
      <motion.article
        style={{ scale, top: `calc(${index * 26}px)` }}
        className={cn(
          // will-change keeps each card on its own raster: scaling it while scrolling no longer re-rasterizes the card every frame
          "relative grid w-full origin-top gap-10 overflow-hidden rounded-[28px] p-7 will-change-transform sm:p-10 md:h-[min(80svh,46rem)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center lg:p-14",
          tone === "paper" && "on-paper bg-paper text-ink",
          tone === "teal" && "on-teal bg-teal text-ink",
          tone === "ink" && "bg-ink-3 text-paper ring-1 ring-rule",
        )}
      >
        {children}
        <motion.span aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink will-change-[opacity]" />
      </motion.article>
    </div>
  );
}

function CaseText({ title, kind, summary, tags, note, muted }: { title: string; kind: string; summary: string; tags: string[]; note?: ReactNode; muted: string }) {
  return (
    <div className="flex h-full flex-col">
      <h3 className="text-[clamp(2rem,1.2rem+2.6vw,3.75rem)] font-[850] uppercase leading-[0.92] tracking-[-0.02em] [font-stretch:115%]">{title}</h3>
      <p className={cn("mt-3 text-[0.9375rem] font-semibold", muted)}>{kind}</p>
      <p className={cn("mt-6 max-w-[30rem] text-[1.0625rem] leading-relaxed", muted)}>{summary}</p>
      {note}
      <ul className="mt-auto flex flex-wrap gap-2 pt-8">
        {tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Work() {
  const deck = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: deck, offset: ["start start", "end end"] });

  return (
    <ZSection id="work" aria-labelledby="work-title" className="bg-ink" from="30%" to="62%">
      <div className="shell pt-[clamp(5.5rem,3.5rem+6vw,10rem)]">
        <div className="grid gap-x-14 gap-y-6 lg:grid-cols-2 lg:items-end">
          <KineticTitle id="work-title" lines={["Selected", "work."]} className="display-xl" />
          <p className="lede max-w-[30rem] text-haze">
            Two products we’ve built, across mobile, web, and the backend between them.
          </p>
        </div>

        <div ref={deck} className="mt-10 grid gap-5 pb-[clamp(4rem,2rem+6vw,8rem)] md:mt-0 md:block md:gap-0">
          <DeckCard index={0} total={2} progress={scrollYProgress} tone="paper">
            <CaseText
              title={suki.name}
              kind={suki.kind}
              summary={suki.summary}
              tags={["Kotlin Multiplatform", "Next.js", "Supabase", "Maya Checkout"]}
              muted="text-slate"
              note={<p className="mt-4 max-w-[30rem] font-semibold">{suki.role}</p>}
            />
            <SukiMap />
          </DeckCard>

          <DeckCard index={1} total={2} progress={scrollYProgress} tone="ink">
            <CaseText
              title={tagaCuyo.name}
              kind={tagaCuyo.kind}
              summary={tagaCuyo.summary}
              tags={tagaCuyo.stack}
              muted="text-haze"
              note={
                <p className="mt-6 inline-flex max-w-max items-center gap-2.5 rounded-full bg-paper/10 px-4 py-2 text-[0.875rem] font-semibold">
                  <Icon name="award" size={18} className="shrink-0 text-teal" />
                  {tagaCuyo.award}
                </p>
              }
            />
            <TagaFan />
          </DeckCard>
        </div>
      </div>

      <div className="border-y border-rule py-6 sm:py-8">
        <Marquee speed={1.6} className="overflow-hidden">
          {bandWords.map((word) => (
            <span key={word} className="flex items-center">
              <span className="outline-text text-[clamp(2.6rem,1.4rem+4vw,5.5rem)] font-[850] uppercase leading-none tracking-[-0.02em] text-paper [font-stretch:120%]">
                {word}
              </span>
              <span aria-hidden="true" className="mx-8 size-3 rotate-45 bg-teal sm:mx-12 sm:size-4" />
            </span>
          ))}
        </Marquee>
      </div>
    </ZSection>
  );
}
