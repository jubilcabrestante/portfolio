// components/SectionWrapper.tsx
import { motion } from "framer-motion";
import React from "react";

const sectionVariants = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  return (
    <motion.div
      initial={sectionVariants.initial}
      whileInView={sectionVariants.whileInView}
      transition={sectionVariants.transition}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
