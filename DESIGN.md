---
name: Dzypher
description: "The Cut": web and mobile apps that work as one, told through a logo cut in two.
colors:
  ink: "#0e1117"
  ink-2: "#141922"
  ink-3: "#1a2029"
  rule: "#262d38"
  haze: "#9aa3b1"
  paper: "#f5f7fa"
  rule-light: "#dce1e7"
  slate: "#586170"
  teal: "#2dd4bf"
  teal-bright: "#5eead4"
  teal-deep: "#0f766e"
typography:
  display-hero:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 0.5rem + 5.9vw, 6.75rem)"
    fontWeight: 850
    lineHeight: 0.86
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 114"
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 0.9rem + 5vw, 6.25rem)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 120"
  statement:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1rem + 3vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 2.6vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 115"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + 0.8vw, 1.75rem)"
    fontWeight: 760
    lineHeight: 1.12
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 108"
  body-lg:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.01em"
rounded:
  inner: "12px"
  panel: "16px"
  card: "22px"
  deck: "28px"
  pill: "999px"
spacing:
  gutter-mobile: "20px"
  gutter: "32px"
  container: "84rem"
  section: "clamp(5.5rem, 3.5rem + 6vw, 10rem)"
  z-step: "clamp(42px, 6.5vw, 104px)"
  card: "32px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-ghost:
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  tag:
    textColor: "{colors.haze}"
    rounded: "{rounded.pill}"
    padding: "0.32rem 0.75rem"
    typography: "{typography.label}"
  chip-selected:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "2.75rem"
  tile-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  tile-teal:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  deck-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.deck}"
    padding: "56px"
---

# Design System: Dzypher

## Overview

**Creative North Star: "The Cut"**

Dzypher's mark is a D cut in two by a Z: a paper half and a teal half on ink. The whole site is built from that cut. The two halves stand for web and mobile, two products that fit together as one, and the Z channel between them becomes the page's recurring gesture: section edges step at its angle, buttons fill along its diagonal, and the hero's particle mark splits along it as you scroll. The owner asked for a site with real motion and a look nobody else has, and rejected an earlier category-standard build for having neither.

The page is dark, kinetic, and confident. Ink is the ground; paper and teal arrive as whole fields (sections, tiles, cards), never as sprinkled accents. Display type is Archivo pushed to its extremes, uppercase at width 114–125% and weight 850, entering condensed and stretching to full width. Motion is everywhere it can carry meaning: particles that assemble the mark and scatter around the cursor, a pinned scroll story where a phone order lands on a dashboard, a stacked deck of case studies, a horizontal process track, and type that thickens near the cursor. Every effect pauses offscreen and has a complete, still reduced-motion state.

**Key Characteristics:**
- Ink ground with paper and teal as whole fields, straight from the logo.
- Section edges stepped like the logo's Z channel (47°), sliding as you scroll.
- Archivo at its extremes: uppercase, width up to 125%, weight 850, stretching into place.
- One signature per section: particle mark, scroll story, stacked deck, horizontal track, proximity type.
- Real products shown working, with every recreated screen labelled as sample data.

## Colors

Three colours carry the brand, the logo's own; everything else is a quieter step of ink.

### Primary
- **Logo Teal** (#2dd4bf): The mobile half of the mark. Fills the primary action, selected chips, the Mobile tile, the PCSD deck card, and the whole contact section. Text on it is always ink.
- **Bright Teal** (#5eead4): Hover lift for teal surfaces.
- **Deep Teal** (#0f766e): Teal at text-safe strength on paper (5.5:1); icons and accents on light grounds.

### Secondary
- **Paper** (#f5f7fa): The web half of the mark. Display and body text on ink, and whole light fields: the services and process sections, the Suki deck card.

### Neutral
- **Ink** (#0e1117): The logo's ground and the page's. Also text on paper and teal.
- **Raised Ink** (#141922) and **Card Ink** (#1a2029): Surfaces on the ink ground (the Taga-Cuyo deck card, release rows, the textarea).
- **Rule** (#262d38): Hairlines and rings on ink.
- **Haze** (#9aa3b1): Secondary text on ink (7.9:1).
- **Light Rule** (#dce1e7): Hairlines and rings on paper.
- **Slate** (#586170): Secondary text on paper (6:1).

### Named Rules
**The Two Halves Rule.** Paper and teal are the logo's halves. Use them as whole fields (a section, a tile, a card) on the ink ground, never as thin accents scattered across a neutral page.

**The Product Frame Rule.** Recreated product interfaces keep their own palette inside their device frame (Suki's green lives only in the linked-devices demo and the Suki logo) and never leak onto Dzypher's surfaces.

## Typography

**Display Font:** Archivo (variable: weight 100–900, width 62–125)
**Body Font:** Archivo

**Character:** One sturdy grotesque played at two extremes: display lines are uppercase, heavy, and stretched wide, while body copy stays at normal width and regular weight so it reads easily under the noise.

### Hierarchy
- **Display Hero** (850, clamp 2.6rem → 6.75rem, 0.86, width 100% on phones, 114% from 768px): the hero headline, set on explicit lines.
- **Display** (850, clamp 2.4rem → 6.25rem, 0.9, width 104% → 120%): section titles, uppercase.
- **Statement** (800, clamp 1.9rem → 4.25rem, 1.04, width 108%): the studio statement that lights up as it scrolls.
- **Headline** (850, clamp 2rem → 3.75rem, 0.92, width 115%): case-study and process-step names, uppercase.
- **Title** (760, clamp 1.35rem → 1.75rem, 1.12, width 108%): tile titles, story steps, list headings.
- **Body Large** (400, clamp 1.0625rem → 1.3125rem, 1.55): section ledes, capped near 32rem.
- **Body** (400, 1.0625rem, 1.6) and **Body Small** (400, 0.9375rem): running text and tile copy.
- **Label** (600, 0.8125rem, 0.01em): tags, captions, the ticker. Sentence case.

The contact headline and the footer wordmark sit outside the ramp on purpose: "Let's build it." swells from weight 760 / width 100 at rest to 900 / 125 near the cursor, and DZYPHER is set at 15.2vw, weight 900, width 125 to span the page.

### Named Rules
**The Stretch Rule.** Display lines enter condensed (width 62%) and stretch to full width as they rise out of a mask, staggered 85ms per line. Static, they sit at full width.

**The No Eyebrow Rule.** Nothing sits above a heading. Context (a client name, a category) goes below it; sequence numbers sit inline with the title.

## Layout

A centred container of `min(100% - 2.5rem, 84rem)`, widening the gutter to 2rem per side from 640px. Sections use fluid vertical padding (clamp 5.5rem → 10rem) and alternate ink, paper, ink, paper, ink, teal, ink. Each section after the hero overlaps its predecessor by one Z-step and clips its own top edge into the logo's channel shape, so the boundary between two colours is always the cut. Three sections pin while scrolling on wide screens: the story (340vh), the case-study deck (one viewport per card), and the process track (300vh, sliding horizontally). Below 768px, the deck and the process collapse to normal vertical flow, and the hero stacks the mark above the headline (side by side from 1024px).

## Elevation & Depth

Flat by default: depth comes from colour fields, hairline rings, and motion, not shadow. The glass nav pill floats on blur and a hairline only. Shadows belong to physical objects inside illustrations: the browser and phone frames in the linked-devices demo, the phones in the Taga-Cuyo fan and the Mobile tile.

### Shadow Vocabulary
- **Browser frame** (`box-shadow: 0 0 0 1px rgb(14 17 23 / 0.07), 0 1.6em 3.6em -1.4em rgb(14 17 23 / 0.28), 0 0.6em 1.2em -0.6em rgb(14 17 23 / 0.12)`): the merchant console window.
- **Phone frame** (`box-shadow: 0 2.2em 4em -1.6em rgb(14 17 23 / 0.5), 0 0.8em 1.6em -0.8em rgb(14 17 23 / 0.3)`): the customer app phone.

### Named Rules
**The Devices-Only Shadow Rule.** Only device frames cast shadows. Cards, tiles, buttons, chips, and the nav never do.

## Shapes

Round and generous, cut by one diagonal. Cards and tiles use 22px corners, the large deck cards and the enquiry composer 28px, inner panels 16px, small inner surfaces 12px, and every control is a full pill. The one hard edge in the system is the Z-cut: section tops step at the logo's channel angle (run = 0.93 × rise), and the primary button's hover fill wipes in along the same diagonal.

## Components

### Buttons
- **Shape:** Full pill, at least 3.25rem tall (2.5rem compact in the nav).
- **Primary:** Logo Teal with ink text, 0.85rem × 1.5rem, weight 700. Hover wipes a paper fill in along the logo's diagonal (0.55s, expo out) and nudges the arrow 4px.
- **Ghost:** Paper text inside a 1.5px paper ring at 28%; hover wipes paper in and the text turns ink.
- **Magnetic:** Primary actions drift toward a mouse pointer within their bounds and spring back.
- **Focus:** 2px teal outline offset 3px on ink; ink outline on paper and teal.

### Chips (enquiry composer)
- **Style:** Pills on ink with a Rule ring; hover brightens the ring to Haze.
- **State:** Selected fills Logo Teal with ink text and a check; `aria-pressed` reflects it; press scales to 0.95.

### Tags
- **Style:** Pill with an inset hairline (paper at 16% on ink, Light Rule on paper, ink at 25% on teal) and label-size text.

### Cards / Containers
- **Bento tile:** 22px corners, 32px padding; ink, teal, or white (with a Light Rule ring) on the paper services section, each carrying one live micro-animation.
- **Deck card:** 28px corners, up to 56px padding; paper, teal, or card ink. Sticks while the next card slides over it, scaling back 4.5% per remaining card and dimming.
- **Shadow Strategy:** none (see Elevation).

### Inputs / Fields
- **Textarea:** Card Ink fill, Rule ring, 16px corners, paper text, Haze placeholder, teal caret; focus thickens the ring to 2px teal.

### Navigation
- **Glass pill:** fixed, centred, up to 58rem wide; ink at 55% with a strong backdrop blur and a paper hairline; compacts to 50rem after 60px of scroll. Links roll their label upward on hover.
- **Mobile:** a menu button opens a full-screen ink panel that wipes in along the diagonal, with uppercase stretched links rising in sequence; Escape closes it and page scroll pauses underneath.

### Particle Mark (signature)
The hero's logo as ~3,500 square particles sampled from the mark's own paths: paper particles for the upper half, teal for the lower. They arrive from opposite sides of the Z diagonal and spring into place, breathe slightly, scatter around the pointer, and split apart along the cut as the hero scrolls away. Captions mark the halves "Web" and "Mobile". Canvas pauses offscreen; reduced motion draws it still.

### Linked Devices (signature)
A recreation of the Suki customer app (phone) and merchant console (browser) built from the real apps' layouts, labels, statuses, and palette, captioned as sample data. In the pinned story, scroll drives four stages: checkout, placing, the order landing in Recent Orders and Notifications with metrics updated by Suki's points rule, and the store accepting it as the phone's tracker advances.

### Z-Cut Section
Any section after the hero: overlaps the previous one by one step, clips its top into the channel shape, and slides the step sideways as it scrolls in.

### Marquees
The hero ticker (stack names separated by the logo's Z glyph) and the outlined services band drift on their own, speed up with scroll velocity, reverse with scroll direction, and lean slightly while moving.

## Do's and Don'ts

### Do:
- **Do** set section and case titles uppercase in Archivo at weight 850 and width 114–125%, entering with the stretch reveal.
- **Do** bring paper and teal in as whole fields on ink, and step every coloured boundary with the Z-cut.
- **Do** give each section at most one signature motion, pause loops offscreen, and provide a complete still state for reduced motion.
- **Do** label every recreated or illustrative interface as sample data, and build recreations from the real product.
- **Do** branch on reduced motion only after mount (`useReduced`), so server and client HTML always match.

### Don't:
- **Don't** place a kicker, eyebrow, or tracked-capitals label above a heading.
- **Don't** introduce a colour beyond ink, paper, and teal on Dzypher's own surfaces.
- **Don't** put shadows on cards, tiles, buttons, chips, or the nav.
- **Don't** let two signature motions compete in the same viewport.
- **Don't** add testimonials, client logos, user counts, or metrics the studio cannot show evidence for.
