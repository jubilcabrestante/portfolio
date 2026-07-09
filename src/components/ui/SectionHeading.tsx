import React from "react";

type Props = {
  kicker: string;
  title: string;
  note?: string;
};

/** Simple numbered section header with an optional handwritten note. */
const SectionHeading = ({ kicker, title, note }: Props) => {
  return (
    <div>
      <p className="font-label text-xs font-bold uppercase tracking-[0.14em] text-accent">
        {kicker}
      </p>
      <div className="mt-2 flex flex-wrap items-baseline gap-x-6 gap-y-1">
        <h2 className="font-headline text-4xl font-black tracking-tight sm:text-5xl">
          {title}
        </h2>
        {note && (
          <p className="max-w-md font-sketch text-xl text-ink-soft">{note}</p>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
