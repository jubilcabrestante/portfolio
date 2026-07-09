// Shared types for the newspaper-style portfolio.

export type ProjectImage = {
  src: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  /** Small-caps label printed above the headline, e.g. "LOYALTY & REWARDS" */
  kicker: string;
  year: string;
  role: string;
  stack: string[];
  /** Short blurb printed on the book cover and in the section index. */
  summary: string;
  /** Article paragraphs printed on the inside pages of the book. */
  story: string[];
  highlights: string[];
  images: ProjectImage[];
  logo?: string;
  link?: { href: string; label: string };
};

export type Classified = {
  heading: string;
  /** Small stamp printed beside the heading, e.g. "PRIMARY TRADE" */
  tag?: string;
  lines: string[];
};

export type ClassifiedColumn = {
  category: string;
  ads: Classified[];
};

/** An experience entry, printed as a wire-service news brief. */
export type Dispatch = {
  dateline: string;
  period: string;
  position: string;
  company: string;
  body: string;
  /** Supporting document, e.g. an internship certificate or award. */
  certificate?: { src: string; label: string };
};

export type PortfolioData = {
  paper: {
    name: string;
    motto: string;
    edition: string;
    place: string;
  };
  frontPage: {
    kicker: string;
    headline: string;
    subhead: string;
    byline: string;
    lede: string[];
    portrait: { src: string; caption: string };
  };
  projects: Project[];
  classifieds: ClassifiedColumn[];
  dispatches: Dispatch[];
  contact: {
    email: string;
    phone: string;
    location: string;
    socials: { label: string; href: string }[];
  };
};
