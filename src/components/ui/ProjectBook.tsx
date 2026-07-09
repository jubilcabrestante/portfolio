"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import FlipBook from "./FlipBook";

/* ---------------------------------------------------------------- pages -- */
/* Page type scales with the book: sizes below are in em so every page
   shrinks gracefully on small screens. */

const PageShell = ({
  title,
  pageNo,
  children,
}: {
  title: string;
  pageNo: number;
  children: React.ReactNode;
}) => (
  <div className="flex h-full flex-col px-[7%] py-[5%]">
    <p className="border-b border-ink/25 pb-[0.35em] text-center font-label text-[0.68em] font-semibold uppercase tracking-[0.1em] text-faded">
      {title}
    </p>
    <div className="min-h-0 grow pt-[0.8em]">{children}</div>
    <p className="pt-[0.35em] text-center font-label text-[0.7em] text-faded">
      — {pageNo} —
    </p>
  </div>
);

const CoverPage = ({ project }: { project: Project }) => (
  <div className="dot-grid flex h-full flex-col items-center justify-between p-[6%] text-center">
    <div className="w-full border border-dashed border-ink/50 p-[4%]">
      <p className="font-label text-[0.68em] font-bold uppercase tracking-[0.12em] text-accent">
        {project.kicker}
      </p>
    </div>

    <div className="flex w-full flex-col items-center gap-[0.8em]">
      {project.logo && (
        <div className="relative h-[5.5em] w-[5.5em]">
          <Image
            src={project.logo}
            alt={`${project.title} logo`}
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>
      )}
      <h4 className="font-headline text-[2.1em] font-black leading-[1.02] tracking-tight">
        {project.title}
      </h4>
      <p className="font-sketch text-[1.1em] leading-snug text-ink-soft">
        the idea: {project.summary}
      </p>
    </div>

    <p className="w-full border-t border-ink/25 pt-[0.6em] font-label text-[0.65em] font-semibold uppercase tracking-[0.1em] text-faded">
      {project.year} · sketchbook
    </p>
  </div>
);

const InfoPage = ({ project }: { project: Project }) => (
  <PageShell title={project.title} pageNo={1}>
    <p className="text-center font-headline text-[1.15em] font-black uppercase tracking-wide">
      The build
    </p>
    <dl className="mt-[1em] space-y-[0.7em] font-body text-[0.85em] leading-snug">
      <div>
        <dt className="font-label text-[0.72em] font-bold uppercase tracking-[0.1em] text-faded">
          Role
        </dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt className="font-label text-[0.72em] font-bold uppercase tracking-[0.1em] text-faded">
          Year
        </dt>
        <dd>{project.year}</dd>
      </div>
      <div>
        <dt className="font-label text-[0.72em] font-bold uppercase tracking-[0.1em] text-faded">
          Stack
        </dt>
        <dd>{project.stack.join(" · ")}</dd>
      </div>
    </dl>
  </PageShell>
);

const StoryPage = ({
  project,
  paragraphs,
  pageNo,
}: {
  project: Project;
  paragraphs: string[];
  pageNo: number;
}) => (
  <PageShell title={project.title} pageNo={pageNo}>
    <div className="space-y-[0.8em] font-body text-[0.85em] leading-relaxed [hyphens:auto] [text-align:justify]">
      {paragraphs.map((p, i) => (
        <p key={i} className={pageNo === 2 && i === 0 ? "drop-cap" : undefined}>
          {p}
        </p>
      ))}
    </div>
  </PageShell>
);

const HighlightsPage = ({
  project,
  pageNo,
}: {
  project: Project;
  pageNo: number;
}) => (
  <PageShell title={project.title} pageNo={pageNo}>
    <p className="text-center font-headline text-[1.05em] font-black uppercase tracking-wide">
      What shipped
    </p>
    <ul className="mt-[0.9em] space-y-[0.6em] font-body text-[0.82em] leading-snug">
      {project.highlights.map((h, i) => (
        <li key={i} className="flex gap-[0.6em]">
          <span aria-hidden>▪</span>
          <span>{h}</span>
        </li>
      ))}
    </ul>
  </PageShell>
);

const ImagePage = ({
  project,
  index,
  pageNo,
}: {
  project: Project;
  index: number;
  pageNo: number;
}) => {
  const image = project.images[index];
  return (
    <PageShell title={project.title} pageNo={pageNo}>
      <figure className="flex h-full flex-col">
        <div className="printed-photo relative min-h-0 grow border border-ink/40">
          <Image
            src={image.src}
            alt={image.caption}
            fill
            sizes="(min-width: 1024px) 30vw, 45vw"
            className="object-contain"
          />
        </div>
        <figcaption className="shrink-0 pt-[0.5em] text-center font-body text-[0.72em] italic leading-tight text-faded">
          Fig. {index + 1} — {image.caption}
        </figcaption>
      </figure>
    </PageShell>
  );
};

const BackCoverPage = ({ project }: { project: Project }) => (
  <div className="dot-grid flex h-full flex-col items-center justify-center gap-[1.2em] p-[8%] text-center">
    <p className="font-sketch text-[2.2em] leading-none text-accent">shipped ✓</p>
    {project.link && (
      <a
        href={project.link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="bg-ink px-[1em] py-[0.5em] font-label text-[0.72em] font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:bg-accent"
      >
        {project.link.label} →
      </a>
    )}
    <p className="font-body text-[0.72em] italic text-faded">
      Jubil L. Cabrestante · {project.year}
    </p>
  </div>
);

/* ----------------------------------------------------------------- book -- */

const ProjectBook = ({ project }: { project: Project }) => {
  // Two story paragraphs fit on one small page.
  const storyChunks: string[][] = [];
  for (let i = 0; i < project.story.length; i += 2) {
    storyChunks.push(project.story.slice(i, i + 2));
  }

  let pageNo = 1; // page 1 is the info page printed on the cover's verso
  const pages: React.ReactNode[] = [
    <CoverPage key="cover" project={project} />,
    <InfoPage key="info" project={project} />,
  ];

  storyChunks.forEach((chunk, i) => {
    pageNo += 1;
    pages.push(
      <StoryPage key={`story-${i}`} project={project} paragraphs={chunk} pageNo={pageNo} />
    );
  });

  pageNo += 1;
  pages.push(<HighlightsPage key="highlights" project={project} pageNo={pageNo} />);

  project.images.forEach((_, i) => {
    pageNo += 1;
    pages.push(<ImagePage key={`img-${i}`} project={project} index={i} pageNo={pageNo} />);
  });

  // Books need an even page count; slot the blank verso before the back
  // cover so every volume still closes on "End of volume".
  if ((pages.length + 1) % 2 !== 0) {
    pages.push(
      <div
        key="blank"
        className="flex h-full items-center justify-center p-[8%]"
      >
        <p className="text-center font-body text-[0.72em] italic text-faded">
          This page is intentionally left blank.
        </p>
      </div>
    );
  }

  pages.push(<BackCoverPage key="back" project={project} />);

  return (
    <div style={{ fontSize: "clamp(9px, 1.3vw, 15px)" }}>
      <FlipBook pages={pages} ariaLabel={`${project.title} — project book`} />
    </div>
  );
};

export default ProjectBook;
