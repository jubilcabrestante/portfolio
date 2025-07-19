"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "../utils/useIsMobile";
import type { Project } from "@/types/skill_types";
import { ArrowRight } from "lucide-react";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isMobile = useIsMobile();

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

  // These values update automatically when `isMobile` changes,
  // so React will re-render the modal with correct size
  const imgWidth = isMobile ? 300 : 800;
  const imgHeight = isMobile ? 500 : 400;

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div
          className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 flex items-center justify-center bg-gray-100 cursor-pointer"
          onClick={openModal}
        >
          {project.images && project.images.length > 0 && (
            <>
              <Image
                src={project.images[currentImage]}
                alt={`${project.title} image`}
                width={imgWidth}
                height={imgHeight}
                className="object-contain max-h-full"
                priority={index === 0}
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full z-10"
                  >
                    ‹
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-2 py-1 rounded-full z-10"
                  >
                    ›
                  </button>
                </>
              )}
            </>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              {project.framework}
            </span>
          </div>
          <p className="mt-3 text-gray-600">{project.description}</p>

          {project.link?.trim() && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-4 text-sm font-medium bg-blue-950 text-white px-3 py-1.5 rounded-lg hover:bg-gray-800 transition"
            >
              View Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          onClick={closeModal}
        >
          <div
            className="relative w-full h-[80vh] max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 z-10 bg-white text-black px-2 py-1 rounded"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="relative w-full h-full rounded overflow-hidden cursor-pointer">
              <Image
                src={project.images[currentImage]}
                alt="Preview"
                fill
                className="object-contain"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
