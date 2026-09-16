"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="site-width flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="section-label">Unexpected interruption</p>
      <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-[-.06em] text-navy sm:text-6xl">Something got in the way.</h1>
      <p className="mt-5 max-w-md text-slate-600">Try loading this section again. If the problem remains, we&rsquo;ll be ready when you come back.</p>
      <button onClick={reset} className="button-primary mt-8">Try again <span>↻</span></button>
    </div>
  );
}
