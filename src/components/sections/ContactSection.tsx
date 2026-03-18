"use client";

import SocialMedia from "@/components/ui/SocialMedia/SocialMedia";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="card-premium relative overflow-hidden text-center p-8 md:p-16"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -z-10" />

        <h2 className="text-subtitle mb-2">Let&apos;s Connect</h2>
        <h3 className="text-heading-1 mb-8">
          <span className="text-white">Start a </span>
          <span className="text-gradient-primary">
            Conversation
          </span>
        </h3>

        <p className="text-body-large mb-12 max-w-2xl mx-auto">
          I&apos;m always open to discussing product design work or partnership opportunities. Inquiries are welcome!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="mailto:jubilcabrestante.work@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
          >
            <div className="bg-blue-500/20 p-3 rounded-full text-blue-400 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">
              jubilcabrestante.work@gmail.com
            </span>
          </a>

          <a
            href="tel:+639926273091"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
          >
            <div className="bg-teal-500/20 p-3 rounded-full text-teal-400 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">
              +639926273091
            </span>
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col items-center">
          <p className="text-gray-500 mb-6">Alternatively, catch me on these platforms</p>
          <div className="scale-125">
            <SocialMedia />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
