# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People deciding who should build their software, confirmed 2026-11-19 (listed in the order the owner gave them):

- **Startups and founders** with a product idea who need an MVP built across web and mobile.
- **Local businesses** in Palawan and the wider Philippines (shops, restaurants, service businesses) that need an app, a system, or a better website.
- **Offices and institutions** (government agencies, schools, organisations) digitising paperwork and workflows.
- **Overseas clients** hiring a remote Philippine development team.

Their job on this site: judge whether Dzypher can build what they need, see that it has built something like it before, and start a conversation.

## Product Purpose

Dzypher is a founder-led software studio that designs, builds, and maintains **web apps** and **mobile apps (iOS + Android)**. The site exists to win project enquiries; success is a qualified visitor getting in touch about a project.

## Positioning

One studio builds the whole product across every surface it needs: the mobile apps, the web apps, and the shared backend between them. The flagship proof is the Suki platform, where one team shipped three Kotlin Multiplatform mobile apps and three Next.js web apps on a single Supabase backend. A client gets web and mobile from the same people instead of coordinating separate vendors.

## Operating Context

- Based in Puerto Princesa, Palawan, Philippines; works with clients remotely.
- Engagements start by email (`jubilcabrestante.work@gmail.com`); there is no contact form, booking link, or pricing page yet.
- Founder: Jubil Cabrestante, founder and lead developer.

## Capabilities and Constraints

- **Core services (confirmed):** web apps; mobile apps for iOS and Android, built with Flutter and native Android in Kotlin (Kotlin confirmed by the owner 2026-11-19).
- **Supporting services (confirmed):** UI/UX design; backend & cloud (APIs, databases, sign-in, Firebase/Supabase setup); e-commerce & payments (storefronts, ordering, local payments such as GCash, Maya, and QR Ph); maintenance & support (updates, fixes, app-store releases, monitoring).
- **Stack evidence:** Kotlin Multiplatform for Android and iOS (the Suki apps since 2026-11-05) and Flutter with Bloc (mobile); Next.js, React, and Tailwind CSS (web); Supabase (Postgres, Realtime, Edge Functions: all of Suki's database and backend); Firebase (Taga-Cuyo); Node.js; Python for machine learning.
- **This site:** Next.js 16 App Router + Tailwind CSS v4, single landing page at `/`; `/resume` redirects home; `metadataBase` is `https://dzypher.dev`.
- **Undecided:** pricing and engagement models, team size beyond the founder, a contact form or call booking.

## Brand Commitments

- Name: **Dzypher**.
- Logo: `assets/dzypher-logo-180.png`, a geometric D with a Z cut through it; the upper stroke is off-white `#f5f7fa`, the lower stroke teal `#2dd4bf`, on ink `#0e1117`.
- Voice: founder-led studio. Write as "we", and introduce Jubil Cabrestante by name as founder and lead developer.
- Direction preference (2026-11-19, revised the same day): the owner rejected the category-standard build as having "no animation, no unique design" and chose **The Cut**: a motion-rich, brand-derived design where the logo's two halves (web and mobile) and its Z-shaped cut drive the visuals. Animation and a distinctive look are now explicit requirements; quality bar remains award-level studio sites.

## Evidence on Hand

- **Suki platform** (confirmed case study, facts corrected by the owner 2026-11-19): Kotlin Multiplatform mobile apps for Android and iOS, which replaced the Flutter apps at 2.0.0 (2026-11-05): `suki_perks` customer app (shop, earn, and redeem points), `suki_business` merchant app (POS, orders, reports), `suki_rider` courier app. Next.js web apps: `suki_perks_web` customer storefront, `suki_business_web` merchant console, `suki_landing` marketing site. All of the database and backend is Supabase, which replaced Firebase: Postgres with Realtime and 28 Edge Functions (`C:\projects\suki-supabase\suki-config`). Online payments through Maya Checkout (cards, Maya, QR Ph), which replaced PayMongo on 2026-09-27. Only these six apps appear on the site; Suki's internal tools are confidential. Real brand assets: `C:\projects\suki\suki_perks\assets\images\logo.png` and the two banners. **No real app screenshots exist**; `public/assets/sukiperks/1–4.png` are placeholders.
- **Taga-Cuyo** (confirmed case study): Tagalog–Cuyonon language-learning app (Flutter + Firebase) with a sequence-to-sequence translation model trained in Python; won Best Capstone Project Paper at the PSU 2025 Research Colloquium (`public/assets/certificates/2.jpg`). Real screenshots: `public/assets/taga-cuyo/1–8`.
- **Not Dzypher work:** Sakayna (excluded by the owner, 2026-11-19).
- **Confidential, never show:** the PCSD Document Tracking System (owner's employment work; removed by the owner 2026-11-21). Do not name it, describe it, or use it as proof anywhere on the site.
- **Absent, do not fabricate:** testimonials, client logos, user counts, revenue, performance metrics, prices, delivery times, and any claim that Suki is live in production.

## Product Principles

1. Prove with built work: real products and the real shape of their systems over adjectives.
2. Web and mobile are one build: the client's customers, staff, and admins end up on one system.
3. A named founder answers for the work.
4. Plain words for non-technical buyers, with the stack detail technical founders and overseas teams look for.
5. Never invent proof.
