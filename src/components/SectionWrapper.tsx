"use client";

import { motion, Variants } from "framer-motion";
import React, { ReactNode, HTMLAttributes } from "react";

const sectionVariants: Variants = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
};

const transition = {
  duration: 0.6,
  ease: "easeOut" as const,
};

interface SectionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  // You can extend with other props if needed
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
  id,
  style,
  title,
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      variants={sectionVariants}
      transition={transition}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      id={id}
      style={style}
      title={title}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
