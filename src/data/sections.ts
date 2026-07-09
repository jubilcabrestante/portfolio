// Site sections — shared by the navbar and the footer.

export type SectionInfo = {
  id: string;
  label: string;
  /** Order number shown in section headings, e.g. "01" */
  page: string;
  /** Full section heading title. */
  desk: string;
};

export const sections: SectionInfo[] = [
  { id: "work", label: "Work", page: "01", desk: "Selected Work" },
  { id: "skills", label: "Skills", page: "02", desk: "Skills & Capabilities" },
  { id: "experience", label: "Experience", page: "03", desk: "Experience" },
  { id: "contact", label: "Contact", page: "04", desk: "Contact" },
];
