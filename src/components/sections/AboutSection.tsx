"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="card-premium relative overflow-hidden p-8 md:p-16"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[80px] -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-subtitle mb-2">
              The Architect Behind the Code
            </h2>
            <h3 className="text-heading-1 mb-6">
              <span className="text-white">Pushing boundaries in </span>
              <span className="text-gradient-primary">
                digital creation
              </span>
            </h3>
            <p className="text-body-large mb-6">
              I am a passionate and driven software engineer with a strong
              foundation in modern frameworks. I construct seamless, user-centric
              applications that prioritize performance and robust architecture.
            </p>
            <p className="text-body-large">
              My expertise spans across React Native, Flutter, and cutting-edge web
              technologies like React and Next.js. I am dedicated to continuous learning
              and leveraging the latest tools to build solutions that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-8 md:mt-0">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors shadow-inner">
              <h4 className="text-5xl font-bold text-blue-400 mb-3">3+</h4>
              <p className="text-gray-400 font-medium">Years Experience</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors shadow-inner">
              <h4 className="text-5xl font-bold text-teal-400 mb-3">20+</h4>
              <p className="text-gray-400 font-medium">Projects Completed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
