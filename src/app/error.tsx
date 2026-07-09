"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="font-label text-xs font-bold uppercase tracking-[0.12em] text-accent">
        Something went wrong
      </p>
      <h1 className="mt-3 font-headline text-4xl font-black">
        An unexpected error interrupted the page.
      </h1>
      <p className="mt-3 font-body text-[15px] italic text-ink-soft">
        Try again — if it keeps happening, it&rsquo;s my bug, not yours.
      </p>
      <button
        onClick={reset}
        className="mt-8 bg-ink px-6 py-3 font-label text-sm font-bold text-paper transition-colors hover:bg-accent"
      >
        Try again
      </button>
    </div>
  );
}
