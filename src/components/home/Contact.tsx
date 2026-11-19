"use client";

import { useEffect, useMemo, useState } from "react";
import Magnetic from "@/components/motion/Magnetic";
import ProximityText from "@/components/motion/ProximityText";
import ZSection from "@/components/motion/ZSection";
import { Icon } from "@/components/ui/Icon";
import { enquiryOptions, studio } from "@/data/site";
import { cn } from "@/lib/utils";

function buildMailto(needs: string[], notes: string) {
  const subject = needs.length ? `Project enquiry: ${needs.join(", ")}` : "Project enquiry";
  const body = [
    "Hi Dzypher,",
    "",
    `We’re looking for help with: ${needs.length ? needs.join(", ") : "a new project"}.`,
    "",
    notes.trim() || "About the project:",
    "",
    "Timeline:",
    "",
  ].join("\r\n");
  return `mailto:${studio.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState<"idle" | "done" | "failed">("idle");
  const href = useMemo(() => buildMailto(needs, notes), [needs, notes]);

  useEffect(() => {
    if (copied === "idle") return;
    const timer = window.setTimeout(() => setCopied("idle"), 2400);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const toggle = (option: string) =>
    setNeeds((current) => (current.includes(option) ? current.filter((item) => item !== option) : [...current, option]));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(studio.email);
      setCopied("done");
    } catch {
      setCopied("failed");
    }
  };

  return (
    <ZSection id="contact" aria-labelledby="contact-title" className="on-teal bg-teal text-ink" from="70%" to="34%">
      <div className="shell section-y">
        <ProximityText
          id="contact-title"
          text="Let’s build it."
          className="text-[clamp(3.2rem,1rem+9.5vw,11rem)] uppercase leading-[0.86] tracking-[-0.03em]"
        />

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div>
            <p className="lede max-w-[28rem] font-medium">
              Send a few lines about the idea, who it’s for, and when you need it. We’ll reply with questions and a
              suggested next step.
            </p>
            <div className="mt-10 grid gap-4 border-t border-ink/20 pt-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <a href={`mailto:${studio.email}`} className="inline-flex items-center gap-2.5 text-[1.0625rem] font-[800] underline decoration-ink/30 decoration-1 underline-offset-[0.22em] transition-colors hover:decoration-ink">
                  <Icon name="mail" size={20} />
                  {studio.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-[0.875rem] font-[700] ring-1 ring-ink/25 transition-colors hover:bg-ink hover:text-teal"
                >
                  <Icon name={copied === "done" ? "check" : "copy"} size={15} />
                  {copied === "done" ? "Copied" : "Copy address"}
                </button>
                <span role="status" aria-live="polite" className="sr-only">
                  {copied === "done" ? "Email address copied" : copied === "failed" ? "Copy failed. Select the address to copy it." : ""}
                </span>
              </div>
              {copied === "failed" && <p className="text-[0.875rem]">Your browser blocked copying. Select the address above to copy it.</p>}
              <p className="flex items-center gap-2.5 text-[0.9375rem]">
                <Icon name="pin" size={18} className="shrink-0" /> {studio.location}, working with clients anywhere
              </p>
            </div>
          </div>

          <div className="rounded-[28px] bg-ink p-6 text-paper sm:p-9">
            <fieldset>
              <legend className="title">What do you need?</legend>
              <p className="mt-1.5 text-[0.9375rem] text-haze">Pick any that apply.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {enquiryOptions.map((option) => {
                  const active = needs.includes(option);
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggle(option)}
                      className={cn(
                        "inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-[0.9375rem] font-semibold transition-[background-color,color,box-shadow,transform] duration-300 active:scale-95",
                        active ? "bg-teal text-ink" : "text-paper ring-1 ring-rule hover:ring-haze",
                      )}
                    >
                      {active && <Icon name="check" size={16} strokeWidth={2.2} />}
                      {option}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label htmlFor="enquiry-notes" className="mt-7 block text-[0.9375rem] font-semibold">
              Anything else we should know? <span className="font-normal text-haze">(optional)</span>
            </label>
            <textarea
              id="enquiry-notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              rows={4}
              placeholder="Who it’s for, what it should do, and when you need it."
              className="mt-2.5 w-full resize-y rounded-[16px] bg-ink-3 px-4 py-3 text-[1rem] leading-relaxed text-paper ring-1 ring-rule placeholder:text-haze focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            />

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Magnetic>
                <a href={href} className="btn btn-teal">
                  Email us <Icon name="arrowRight" size={18} />
                </a>
              </Magnetic>
              <p className="text-[0.875rem] text-haze">Opens your email app with this filled in.</p>
            </div>
          </div>
        </div>
      </div>
    </ZSection>
  );
}
