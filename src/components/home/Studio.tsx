"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollWords from "@/components/motion/ScrollWords";
import ZSection from "@/components/motion/ZSection";
import { Icon } from "@/components/ui/Icon";
import { audiences, founder, studio } from "@/data/site";
import { useReduced } from "@/components/motion/useReduced";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Studio() {
  const reduced = useReduced();

  return (
    <ZSection id="studio" aria-labelledby="studio-title" className="bg-ink" from="28%" to="64%">
      <div className="shell section-y">
        <h2 id="studio-title" className="sr-only">
          The studio
        </h2>
        <ScrollWords
          className="max-w-[62rem] text-[clamp(1.9rem,1rem+3vw,4.25rem)] font-[800] leading-[1.04] tracking-[-0.02em] [font-stretch:108%]"
          text="We’re a founder-led studio in Puerto Princesa, Palawan, building iOS, Android, and web apps for startups, local businesses, institutions, and teams abroad."
        />

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end lg:flex-col lg:items-start">
            <motion.div
              initial={reduced ? false : { clipPath: "polygon(0 100%, 0 100%, -40% 100%, -40% 100%)" }}
              whileInView={{ clipPath: "polygon(0 0, 140% 0, 100% 100%, -40% 100%)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.1, ease }}
              className="relative w-44 shrink-0 overflow-hidden rounded-card bg-ink-3 sm:w-52"
            >
              <Image
                src={founder.photo}
                alt={`${founder.name}, ${founder.role.toLowerCase()} of Dzypher`}
                width={288}
                height={288}
                sizes="208px"
                className="aspect-square h-auto w-full object-cover"
              />
            </motion.div>
            <div>
              <p className="text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] font-[850] uppercase leading-none tracking-[-0.02em] [font-stretch:112%]">
                {founder.name}
              </p>
              <p className="mt-2 font-semibold text-teal">{founder.role}</p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] font-semibold">
                {studio.socials.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-haze transition-colors hover:text-paper">
                      {social.label}
                      <Icon name="arrowUpRight" size={15} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="max-w-[40rem] space-y-5 text-[1.125rem] leading-relaxed">
              {founder.bio.map((paragraph, index) => (
                <p key={index} className={index === 0 ? undefined : "text-haze"}>
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Main tools">
              {founder.skills.map((skill) => (
                <li key={skill} className="tag">
                  {skill}
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-3 text-[0.9375rem] text-haze">
              <Icon name="pin" size={18} className="shrink-0 text-teal" /> {studio.location}, working in {studio.timezone}
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="title">Who we build for</h3>
          <ul className="mt-6 border-t border-rule">
            {audiences.map((audience) => (
              <li key={audience.title} className="group relative overflow-hidden border-b border-rule">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-bottom scale-y-0 bg-teal transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:scale-y-100"
                />
                <div className="relative grid gap-2 py-6 transition-colors duration-500 group-hover:text-ink md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-10 md:px-4">
                  <p className="text-[clamp(1.35rem,1rem+1.2vw,2.1rem)] font-[850] uppercase leading-none tracking-[-0.02em] [font-stretch:112%]">
                    {audience.title}
                  </p>
                  <p className="text-haze transition-colors duration-500 group-hover:text-ink/80">{audience.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ZSection>
  );
}
