"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <header className="relative pt-20 pb-12 overflow-hidden flex items-center min-h-[85vh]">
      {/* Abstracted CSS Class for Visuals */}
      <div className="mesh-gradient-bg opacity-30" />

      <div className="section-container grid grid-cols-1 lg:grid-cols-[45%_55%] items-center gap-12 relative z-10 w-full">
        {/* Left side: Image with Parallax */}
        <motion.div 
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center items-center order-2 lg:order-1 relative"
        >
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
            {/* Pulsing rings */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border-2 border-blue-500/30 scale-105" 
            />
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute inset-0 rounded-full border border-teal-400/20 scale-110" 
            />
            
            <div className="relative w-full h-full overflow-hidden rounded-full border border-white/10 shadow-2xl bg-[#0f172a]">
              <Image
                src="/assets/profile.png"
                alt="Jubil L. Cabrestante"
                fill
                sizes="(max-width: 768px) 18rem, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Right side: Text with Typography Classes */}
        <motion.div 
          style={{ y: y1 }}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-subtitle mb-3">
              Engineering Digital Excellence
            </h2>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-hero mb-4"
          >
            <span>Jubil L. </span>
            <span className="text-gradient-primary">
              Cabrestante
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-heading-2 text-gray-300 font-light mb-6"
          >
            Architecting Modern Web & Mobile Solutions
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl mx-auto lg:mx-0"
          >
            <p className="text-body-large mb-8">
              Transforming complex problems into elegant, highly-performant applications. Specialized in scalable frontend architectures, responsive design, and frictionless user experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="#projects" className="btn-primary">
                Explore My Work
              </Link>
              <Link href="#contact" className="btn-outline">
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
