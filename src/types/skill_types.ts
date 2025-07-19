// types.ts

import * as Icons from "lucide-react";

export type SkillItem = {
  title: string;
  icon?: keyof typeof Icons;
  description: string[];
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export type Project = {
  title: string;
  framework: string;
  description: string;
  images: string[];
  link?: string;
};
export type Experience = {
  position: string;
  company: string;
  period: string;
  description: string;
};

export type PortfolioData = {
  header: {
    title: string;
    description: string;
  };
  about: {
    content: string;
  };
  projects: Project[];
  skills: SkillGroup[];
  experience: Experience[];
};
