import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résumé — Jubil L. Cabrestante",
  description:
    "Résumé of Jubil L. Cabrestante, Mobile & Full-Stack Web Developer based in Puerto Princesa, Palawan.",
};

const resume = {
  name: "Jubil L. Cabrestante",
  title: "Mobile & Full-Stack Web Developer",
  contactLine: [
    "Puerto Princesa City, Palawan, Philippines",
    "+63 992 627 3091",
    "jubilcabrestante.work@gmail.com",
  ],
  links: [
    { label: "github.com/jubilcabrestante", href: "https://github.com/jubilcabrestante" },
    {
      label: "linkedin.com/in/jubil-cabrestante",
      href: "https://www.linkedin.com/in/jubil-cabrestante-2b4118375/",
    },
  ],
  summary:
    "B.S. Information Technology graduate (Palawan State University, 2025) with shipped production work: a ride-booking app on Google Play, a customer-loyalty platform, a government document-tracking system, and an award-winning capstone powered by a self-trained neural translation model (Best Capstone Project Paper, PSU 2025). Builds with Clean Architecture and tests thoroughly before shipping.",
  skills: [
    { area: "Mobile", items: "Flutter · Dart · Bloc / Cubit · Retrofit · Clean Architecture" },
    { area: "Web", items: "React · Next.js · Tailwind CSS · Node.js · JavaScript · HTML & CSS" },
    { area: "Data & Cloud", items: "Firebase & Firestore · Supabase (PostgreSQL) · MySQL · Google Cloud Platform" },
    { area: "Other", items: "Python (seq2seq ML) · Git & GitHub · Jira · Postman · Figma · manual QA" },
  ],
  experience: [
    {
      role: "Flutter Developer & QA Engineer (Intern)",
      org: "Sakayna",
      place: "Puerto Princesa City",
      period: "Jan 2025 – May 2025",
      bullets: [
        "Completed an 800-hour internship developing features for a production ride-booking app, now live on Google Play.",
        "Executed manual QA passes across physical devices — booking flows, regressions, and release readiness.",
        "Collaborated with the team to refine UI/UX and improve the reliability of core booking flows.",
      ],
    },
    {
      role: "Team Leader & Flutter Developer (Capstone)",
      org: "Taga-Cuyo",
      place: "Palawan State University",
      period: "Jan 2024 – May 2025",
      bullets: [
        "Led the team building a Tagalog–Cuyonon language-learning app with interactive lessons and quizzes.",
        "Trained a sequence-to-sequence neural translation model in Python and integrated it into the shipped app.",
        "Awarded Best Capstone Project Paper at the 2025 PSU Research Colloquium.",
      ],
    },
  ],
  projects: [
    {
      name: "SukiPerks",
      stack: "Flutter · Bloc · Firebase",
      desc: "Customer-loyalty app for local businesses — points, perks, and promotions.",
    },
    {
      name: "Sakayna App",
      stack: "Flutter · Bloc · Firebase",
      desc: "Ride-booking application published on Google Play.",
    },
    {
      name: "PCSD Document Tracking System",
      stack: "Flutter Web · Firebase",
      desc: "Tracks government documents from intake to release for the Palawan Council for Sustainable Development.",
    },
  ],
  education: [
    {
      school: "Palawan State University",
      detail: "Bachelor of Science in Information Technology, 2025",
    },
    {
      school: "Palawan National School",
      detail: "STEM Strand, 2019",
    },
  ],
  references: [
    {
      name: "Ralph Kevin E. Macahipay",
      detail: "DevOps Engineer, NUSTAR Resort · Co-Founder & CTO, Gora",
      contact: "ralphdev.work@gmail.com · 0961 726 2694",
    },
    {
      name: "Maria Rizza L. Armildez",
      detail: "Assistant Professor IV, Palawan State University",
      contact: "rizzafm@gmail.com",
    },
  ],
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mt-5">
    <h2 className="border-b border-ink pb-1 font-label text-[11px] font-bold uppercase tracking-[0.16em]">
      {title}
    </h2>
    <div className="mt-2.5">{children}</div>
  </section>
);

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 font-label print:max-w-none print:px-0 print:py-0">
      {/* Screen-only toolbar */}
      <div className="mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="text-[11px] font-semibold uppercase tracking-[0.08em] text-faded hover:text-accent"
        >
          ← Back to portfolio
        </Link>
        <a
          href="/Resume-Cabrestante.pdf"
          download
          className="bg-ink px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-accent"
        >
          Download PDF
        </a>
      </div>

      <article className="resume-sheet border border-ink/10 bg-white p-10 text-ink print:border-0 print:p-0">
        {/* Header */}
        <header className="flex items-start justify-between gap-6 border-b-2 border-ink pb-4">
          <div className="min-w-0">
            <h1 className="text-[26px] font-black leading-tight tracking-tight">
              {resume.name}
            </h1>
            <p className="mt-0.5 text-[13px] font-semibold">{resume.title}</p>
            <p className="mt-2 text-[11px] leading-relaxed text-ink-soft">
              {resume.contactLine.join(" · ")}
              <br />
              {resume.links.map((l, i) => (
                <React.Fragment key={l.href}>
                  {i > 0 && " · "}
                  <a href={l.href} className="underline decoration-ink/30 underline-offset-2">
                    {l.label}
                  </a>
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden border border-ink/20">
            <Image
              src="/assets/profile-2026.png"
              alt="Portrait of Jubil L. Cabrestante"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-[12px] leading-relaxed">{resume.summary}</p>
        </Section>

        {/* Skills */}
        <Section title="Technical Skills">
          <dl className="space-y-1">
            {resume.skills.map((s) => (
              <div key={s.area} className="flex gap-3">
                <dt className="w-28 shrink-0 text-[11.5px] font-bold">{s.area}</dt>
                <dd className="text-[11.5px] leading-snug text-ink-soft">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <div className="space-y-3.5">
            {resume.experience.map((e) => (
              <div key={e.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="text-[12.5px] font-bold">
                    {e.role}
                    <span className="font-medium text-ink-soft">
                      {" "}
                      · {e.org}, {e.place}
                    </span>
                  </p>
                  <p className="text-[10.5px] font-semibold text-faded">{e.period}</p>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11.5px] leading-snug">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Selected Projects">
          <ul className="space-y-1">
            {resume.projects.map((p) => (
              <li key={p.name} className="text-[11.5px] leading-snug">
                <span className="font-bold">{p.name}</span>
                <span className="text-faded"> ({p.stack})</span> — {p.desc}
              </li>
            ))}
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          <ul className="space-y-1">
            {resume.education.map((e) => (
              <li key={e.school} className="text-[11.5px] leading-snug">
                <span className="font-bold">{e.school}</span> — {e.detail}
              </li>
            ))}
          </ul>
        </Section>

        {/* References */}
        <Section title="References">
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 print:grid-cols-2">
            {resume.references.map((r) => (
              <p key={r.name} className="text-[11px] leading-snug">
                <span className="font-bold">{r.name}</span>
                <br />
                {r.detail}
                <br />
                {r.contact}
              </p>
            ))}
          </div>
        </Section>

      </article>
    </div>
  );
}
