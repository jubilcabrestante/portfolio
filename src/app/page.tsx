"use client";

import Image from "next/image";

const services = [
  {
    number: "01",
    title: "Web platforms",
    text: "Fast, focused web applications that turn complex operations into clear, useful experiences.",
    tags: ["Next.js", "React", "Supabase"],
    visual: "web",
  },
  {
    number: "02",
    title: "Mobile products",
    text: "Cross-platform apps designed around real customer journeys, from first tap to repeat use.",
    tags: ["Flutter", "Firebase", "iOS + Android"],
    visual: "mobile",
  },
  {
    number: "03",
    title: "Product systems",
    text: "The workflows, data models, and integrations behind a service your team can rely on.",
    tags: ["APIs", "Dashboards", "Automation"],
    visual: "systems",
  },
];

const work = [
  {
    type: "Loyalty & rewards",
    title: "SukiPerks",
    description:
      "A customer loyalty product that helps local businesses reward regulars with points, perks, and promos.",
    accent: "lime",
    labels: ["Flutter", "Firebase", "Real-time data"],
    visual: "rewards",
  },
  {
    type: "Transport technology",
    title: "Sakayna",
    description:
      "A ride-booking app for commuters in Tagum City, developed with a practical focus on dependable journeys.",
    accent: "violet",
    labels: ["Mobile app", "Booking flows", "QA"],
    visual: "rides",
  },
  {
    type: "Operations software",
    title: "Document Tracking System",
    description:
      "A traceable document workflow for the Palawan Council for Sustainable Development, from intake through release.",
    accent: "cyan",
    labels: ["Web platform", "Workflow", "Firebase"],
    visual: "operations",
  },
];

const process = [
  ["Discover", "We learn the problem, users, constraints, and the one outcome that matters most."],
  ["Define", "We shape a sensible product plan, technical approach, and delivery path before the build gets noisy."],
  ["Develop", "We build in clear stages, sharing work early so decisions stay grounded and progress stays visible."],
  ["Launch & grow", "We test the details, release with confidence, and leave a system ready for its next version."],
];

function ServiceVisual({ type }: { type: string }) {
  if (type === "mobile") {
    return <div className="service-signal signal-mobile"><span /><i /><b /></div>;
  }
  if (type === "systems") {
    return <div className="service-signal signal-systems"><span /><span /><span /><i /></div>;
  }
  return <div className="service-signal signal-web"><span /><span /><i /></div>;
}

function CaseVisual({ type }: { type: string }) {
  if (type === "rides") {
    return (
      <div className="case-art case-rides-art">
        <div className="map-line map-line-one" /><div className="map-line map-line-two" />
        <div className="phone-frame"><div className="phone-speaker" /><Image src="/assets/sakayna/1.png" alt="Sakayna ride history screen" fill sizes="210px" className="object-cover object-top" /></div>
        <span className="map-pin pin-one" /><span className="map-pin pin-two" />
      </div>
    );
  }

  if (type === "operations") {
    return (
      <div className="case-art case-operations-art">
        <div className="dashboard-preview"><div className="dash-header"><span /><span /><span /></div><div className="dash-layout"><aside><i /><i /><i /><i /></aside><div className="dash-main"><div className="dash-title"><span /><b /></div><div className="dash-metrics"><i /><i /><i /></div><div className="dash-table"><span /><span /><span /><span /></div></div></div></div>
        <div className="workflow-chip">Document · routed <b>↗</b></div>
      </div>
    );
  }

  return (
    <div className="case-art case-rewards-art">
      <div className="rewards-screen"><div className="rewards-top"><span>SU</span><i /></div><p>Good morning,</p><h4>Anna <span>✦</span></h4><div className="points-card"><small>AVAILABLE POINTS</small><strong>1,280</strong><em>+ 120 this month</em></div><div className="rewards-list"><span /><span /><span /></div></div>
      <div className="reward-orbit orbit-one" /><div className="reward-orbit orbit-two" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <section id="top" className="hero-shell overflow-hidden">
        <div className="site-width relative py-16 sm:py-24 lg:py-32">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <p className="eyebrow"><span className="pulse-dot" /> Product strategy · design · development</p>
              <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[.96] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                Software that makes your <span className="text-lime">next move</span> feel obvious.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Dzypher turns ambitious ideas and difficult workflows into calm, capable digital products people want to use.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a className="button-primary" href="#contact">Plan your build <span>↗</span></a>
                <a className="button-secondary" href="#work">See what we make <span>↓</span></a>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-300">
                <p><strong className="text-white">Product-minded</strong><br />Not feature-first</p>
                <p><strong className="text-white">Web + mobile</strong><br />One capable partner</p>
                <p><strong className="text-white">Built to evolve</strong><br />Beyond the launch</p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[570px]" aria-label="Dzypher product delivery visual">
              <div className="signal-panel">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-300"><span className="h-2 w-2 rounded-full bg-lime" /> DZYPHER / BUILD ROOM</div>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-bold tracking-[.12em] text-slate-300">IN MOTION</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-end justify-between">
                    <div><p className="text-xs uppercase tracking-[.16em] text-slate-400">The product loop</p><p className="mt-2 text-3xl font-semibold tracking-tight text-white">Make the hard<br />things feel easy.</p></div>
                    <div className="grid-mark">D</div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="metric-card"><span>Listen</span><b>01</b><i className="bg-lime" /></div>
                    <div className="metric-card"><span>Shape</span><b>02</b><i className="bg-violet" /></div>
                    <div className="metric-card"><span>Ship</span><b>03</b><i className="bg-cyan" /></div>
                  </div>
                  <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0b1730] p-5">
                    <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-violet/25 blur-3xl" />
                    <p className="relative text-xs font-medium uppercase tracking-[.14em] text-slate-400">Focus → feedback → forward</p>
                    <div className="relative mt-7 flex items-center gap-2">
                      <span className="route-node bg-lime" /><span className="route-line" /><span className="route-node bg-violet" /><span className="route-line" /><span className="route-node bg-cyan" />
                    </div>
                    <div className="relative mt-3 flex justify-between text-[11px] text-slate-400"><span>Intent</span><span>Experience</span><span>Momentum</span></div>
                  </div>
                </div>
              </div>
              <div className="float-card float-card-top">Less friction.<br /><span>More movement.</span></div>
              <div className="float-card float-card-bottom"><span className="pulse-dot" /> A clearer way forward</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-5">
        <div className="site-width flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[.16em] text-slate-500">
          <span>Purposeful strategy</span><span className="hidden sm:block text-slate-300">✦</span><span>Useful experience</span><span className="hidden sm:block text-slate-300">✦</span><span>Dependable delivery</span>
        </div>
      </section>

      <section id="services" className="site-width scroll-mt-20 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="section-label">What we build</p>
          <h2 className="section-title mt-4">Make the next version of your business real.</h2>
          <p className="section-copy mt-5">We bring product thinking, design instinct, and engineering discipline to the moments where a better system changes everything.</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="service-card group">
              <div className="flex items-start justify-between"><span className="text-sm font-semibold text-slate-400">{service.number}</span><span className="service-arrow">↗</span></div>
              <ServiceVisual type={service.visual} />
              <h3 className="mt-8 text-2xl font-semibold tracking-[-.04em] text-navy">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{service.text}</p>
              <ul className="mt-7 flex flex-wrap gap-2">{service.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="bg-ice scroll-mt-20 py-24 sm:py-32">
        <div className="site-width">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl"><p className="section-label">Selected solutions</p><h2 className="section-title mt-4">Work made for the real world.</h2></div>
            <p className="max-w-sm text-base leading-relaxed text-slate-600">Every product starts with a human need, then earns its place by making the work clearer, faster, or more rewarding.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {work.map((project, index) => (
              <article key={project.title} className={`case-card case-${project.accent} ${index === 0 ? "case-featured" : ""}`}>
                <div className="case-number">{String(index + 1).padStart(2, "0")}</div><CaseVisual type={project.visual} />
                <div className="p-6"><p className="text-xs font-semibold uppercase tracking-[.14em] text-slate-500">{project.type}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-navy">{project.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{project.description}</p><ul className="mt-6 flex flex-wrap gap-2">{project.labels.map((label) => <li key={label} className="tag">{label}</li>)}</ul></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="site-width scroll-mt-20 py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="section-label">How we work</p><h2 className="section-title mt-4">A good build starts long before code.</h2><p className="section-copy mt-5">Our process gives the important decisions enough attention, while keeping progress steady and visible.</p><a href="#contact" className="text-link mt-8">Tell us what you&rsquo;re building <span>→</span></a></div>
          <div className="divide-y divide-slate-200 border-t border-slate-200">
            {process.map(([title, description], index) => <div key={title} className="process-row"><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="site-width scroll-mt-20 pb-24 sm:pb-32">
        <div className="about-panel">
          <div><p className="section-label text-lime">Why Dzypher</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-.055em] text-white sm:text-5xl">The best products feel simple because the hard thinking happened first.</h2></div>
          <div className="about-points"><p>We pair practical product thinking with full-stack craft, so your users get a clear experience and your team gets a system they can confidently grow.</p><div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6"><span><b>01</b>Clarity over clutter</span><span><b>02</b>Care in every release</span></div></div>
        </div>
      </section>

      <section id="contact" className="contact-section scroll-mt-20">
        <div className="site-width py-24 text-center sm:py-32">
          <p className="eyebrow justify-center"><span className="pulse-dot" /> Let&rsquo;s make something useful</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-[.97] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl">Bring us the challenge.<br /><span className="text-lime">We&rsquo;ll help shape the answer.</span></h2>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-slate-300">Have a product idea, a process to improve, or a platform that needs a stronger foundation? Start the conversation.</p>
          <a className="button-primary mt-9" href="mailto:jubilcabrestante.work@gmail.com?subject=Project%20enquiry%20for%20Dzypher">Start a conversation <span>↗</span></a>
          <p className="mt-6 text-sm text-slate-400">jubilcabrestante.work@gmail.com · Philippines / remote</p>
        </div>
      </section>
    </div>
  );
}
