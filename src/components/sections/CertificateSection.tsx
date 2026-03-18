"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = [
  {
    id: 1,
    title: "Certificate 1",
    description:
      "SakayNa Quality Assurance and Flutter Developer Certification (Internship)",
    file: "assets/certificates/1.jpg",
  },
  {
    id: 2,
    title: "Certificate 2",
    description: "Best Thesis Capstone Project",
    file: "assets/certificates/2.jpg",
  },
  {
    id: 3,
    title: "Certificate 3",
    description:
      "Python Essentials 1 course Provided by Cisco Networking Academy",
    file: "assets/certificates/3.png",
  },
  {
    id: 4,
    title: "Certificate 4",
    description:
      "Data Privacy Awareness and Internet Media & Information Literacy",
    file: "assets/certificates/4.png",
  },
  {
    id: 5,
    title: "Certificate 5",
    description: "Artificial Intelligence and Machine Learning",
    file: "assets/certificates/5.png",
  },
];

const CertificateSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-subtitle mb-2">Qualifications</h2>
        <h3 className="text-heading-1 mb-6">
          <span className="text-white">Credentials & </span>
          <span className="text-gradient-primary">
            Certifications
          </span>
        </h3>
        <p className="text-body-large max-w-2xl mx-auto">
          A showcase of my continuous learning journey and verified expertise in modern development tools and methodologies.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="px-8 max-w-5xl mx-auto"
      >
        <Slider {...settings} className="certificate-slider cursor-grab active:cursor-grabbing">
          {certificates.map(({ id, title, description, file }) => (
            <div key={id} className="p-4 outline-none">
              <div className="card-premium flex flex-col items-center p-8">
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden border border-white/5 bg-black/50">
                  <Image
                    src={`/${file}`}
                    alt={title}
                    fill
                    className="object-contain"
                    priority={false}
                  />
                </div>
                <h3 className="text-heading-3 mb-2">{title}</h3>
                <p className="text-subtitle text-center px-4">{description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default CertificateSection;
