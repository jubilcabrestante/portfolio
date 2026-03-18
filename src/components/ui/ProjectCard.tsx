"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/skill_types";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="card-premium group relative overflow-hidden flex flex-col h-full cursor-pointer hover:-translate-y-2 p-0">
          
          {/* Default hover glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Image Banner */}
          <div
            className="relative w-full h-64 sm:h-72 lg:h-80 flex items-center justify-center bg-[#0a0f1a] overflow-hidden"
            onClick={openModal}
          >
            {project.images && project.images.length > 0 && (
              <>
                <Image
                  src={project.images[currentImage]}
                  alt={`${project.title} image`}
                  fill={true}
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  priority={index === 0}
                />

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </>
            )}
            
            {/* Top-left technologies overlay */}
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap z-10">
              <span className="badge-premium bg-[#111827]/80 backdrop-blur-md">
                {project.framework}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 relative z-10 bg-gradient-to-t from-[#111827] via-[#111827] to-transparent flex-grow flex flex-col">
            <h3 className="text-heading-3 mb-4 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-body mb-8 leading-relaxed flex-grow line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
              {project.description}
            </p>

            {project.link?.trim() && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass group/btn mt-auto"
                onClick={(e) => e.stopPropagation()}
              >
                View Project
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-[100] bg-[#030712]/90 backdrop-blur-lg p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-h-[90vh] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black/80 backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-md transition-colors"
                  onClick={closeModal}
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative w-full h-[75vh] md:h-[85vh] flex items-center justify-center">
                  <Image
                    src={project.images[currentImage]}
                    alt="Preview"
                    fill
                    className="object-contain p-2 md:p-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    priority
                  />
                  
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-white transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 text-white transition-colors"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ProjectCard;
