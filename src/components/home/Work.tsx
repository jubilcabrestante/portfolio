"use client";

import Image from "next/image";
import { AnimatePresence, motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import KineticTitle from "@/components/motion/KineticTitle";
import Marquee from "@/components/motion/Marquee";
import ZSection from "@/components/motion/ZSection";
import { Icon } from "@/components/ui/Icon";
import { pcsd, suki, tagaCuyo } from "@/data/site";
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

/* ---------- Suki: seven apps, one backend ---------- */
const LEFT = [92, 220, 348];
const RIGHT = [64, 172, 268, 376];

function SukiMap() {
  const ref = useRef<HTMLDivElement>(null);
  const { inView, reduced } = useTicker(ref, 1, 100000);
  const show = inView || reduced;
  const leftPaths = LEFT.map((y) => `M196 ${y} C 240 ${y}, 236 220, 276 220`);
  const rightPaths = RIGHT.map((y) => `M524 ${y} C 480 ${y}, 484 220, 444 220`);

  return (
    <div ref={ref} className="w-full">
      <svg viewBox="0 0 720 440" className="w-full" role="img" aria-label="Suki system map: three Flutter mobile apps and four Next.js web apps connected to one Firebase backend.">
        <text x="20" y="40" fontSize="13" fontWeight="700" fill="#586170">Flutter mobile apps</text>
        <text x="700" y="22" fontSize="13" fontWeight="700" fill="#586170" textAnchor="end">Next.js web apps</text>

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
            <rect x="20" y={LEFT[i] - 28} width="176" height="56" rx="14" fill="#fff" stroke="#dce1e7" />
            <text x="38" y={LEFT[i] - 4} fontSize="15" fontWeight="800" fill="#0e1117">{app.name}</text>
            <text x="38" y={LEFT[i] + 15} fontSize="11.5" fill="#586170">{app.job}</text>
          </motion.g>
        ))}
        {suki.webApps.map((app, i) => (
          <motion.g key={app.name} initial={{ opacity: reduced ? 1 : 0, x: reduced ? 0 : 16 }} animate={show ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, ease, delay: 0.1 + i * 0.08 }}>
            <rect x="524" y={RIGHT[i] - 28} width="176" height="56" rx="14" fill="#fff" stroke="#dce1e7" />
            <text x="542" y={RIGHT[i] - 4} fontSize="15" fontWeight="800" fill="#0e1117">{app.name}</text>
            <text x="542" y={RIGHT[i] + 15} fontSize="11.5" fill="#586170">{app.job}</text>
          </motion.g>
        ))}

        <motion.g initial={{ scale: reduced ? 1 : 0.85, opacity: reduced ? 1 : 0 }} animate={show ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.8, ease }} style={{ transformOrigin: "360px 220px" }}>
          <rect x="276" y="150" width="168" height="140" rx="22" fill="#0e1117" />
          <text x="360" y="198" textAnchor="middle" fontSize="17" fontWeight="800" fill="#f5f7fa">One backend</text>
          <text x="360" y="222" textAnchor="middle" fontSize="13" fontWeight="700" fill="#2dd4bf">Firebase</text>
          <text x="360" y="244" textAnchor="middle" fontSize="11.5" fill="#9aa3b1">Firestore</text>
          <text x="360" y="262" textAnchor="middle" fontSize="11.5" fill="#9aa3b1">53 Cloud Functions</text>
        </motion.g>
      </svg>
    </div>
  );
}

/* ---------- PCSD: a document's route ---------- */
function PcsdRoute() {
  const ref = useRef<HTMLDivElement>(null);
  const { step, reduced } = useTicker(ref, 5, 1300);
  const at = reduced ? 3 : Math.min(step, 3);
  return (
    <div ref={ref} className="w-full" aria-hidden="true">
      <div className="relative px-2 pt-14">
        <div className="absolute inset-x-[12.5%] top-[4.6rem] h-[3px] rounded-full bg-ink/15" />
        <motion.div
          className="absolute left-[12.5%] top-[4.6rem] h-[3px] origin-left rounded-full bg-ink"
          animate={{ width: `${(at / 3) * 75}%` }}
          transition={{ duration: 0.9, ease }}
        />
        <motion.div
          className="absolute top-3 -translate-x-1/2"
          animate={{ left: `${12.5 + at * 25}%` }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[0.75rem] font-[800] text-paper shadow-[0_10px_20px_-10px_rgb(14_17_23/0.6)]">
            <Icon name="file" size={14} /> DTS record
          </span>
        </motion.div>
        <ol className="relative grid grid-cols-4">
          {pcsd.trail.map((stop, i) => (
            <li key={stop.title} className="flex flex-col items-center text-center">
              <span
                className={cn(
                  "grid size-12 place-items-center rounded-full ring-4 ring-teal transition-colors duration-500",
                  i <= at ? "bg-ink text-teal" : "bg-teal text-ink/50 outline outline-2 outline-ink/15",
                )}
              >
                <Icon name={stop.icon} size={20} />
              </span>
              <span className="mt-3 text-[0.8125rem] font-[800] leading-tight sm:text-[0.9375rem]">{stop.title}</span>
              <span className={cn("mt-1 hidden max-w-[11rem] text-[0.8125rem] leading-snug text-ink/70 transition-opacity duration-500 sm:block", i <= at ? "opacity-100" : "opacity-40")}>
                {stop.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
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
          "relative grid w-full origin-top gap-10 overflow-hidden rounded-[28px] p-7 sm:p-10 md:h-[min(80svh,46rem)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-center lg:p-14",
          tone === "paper" && "on-paper bg-paper text-ink",
          tone === "teal" && "on-teal bg-teal text-ink",
          tone === "ink" && "bg-ink-3 text-paper ring-1 ring-rule",
        )}
      >
        {children}
        <motion.span aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-ink" />
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
            Three products we’ve built, across mobile, web, and the backend between them.
          </p>
        </div>

        <div ref={deck} className="mt-10 grid gap-5 pb-[clamp(4rem,2rem+6vw,8rem)] md:mt-0 md:block md:gap-0">
          <DeckCard index={0} total={3} progress={scrollYProgress} tone="paper">
            <CaseText
              title={suki.name}
              kind={suki.kind}
              summary={suki.summary}
              tags={["Flutter", "Next.js", "Firebase", "PayMongo"]}
              muted="text-slate"
              note={<p className="mt-4 max-w-[30rem] font-semibold">{suki.role}</p>}
            />
            <SukiMap />
          </DeckCard>

          <DeckCard index={1} total={3} progress={scrollYProgress} tone="teal">
            <CaseText
              title="PCSD Document Tracking"
              kind={`For the ${pcsd.client}`}
              summary={pcsd.summary}
              tags={pcsd.stack}
              muted="text-ink/75"
            />
            <PcsdRoute />
          </DeckCard>

          <DeckCard index={2} total={3} progress={scrollYProgress} tone="ink">
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
