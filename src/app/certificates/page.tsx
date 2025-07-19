"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

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

const CertificatePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="container">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 inline-block">
        Certificates
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Here you can showcase your certificates, highlighting your achievements
        and qualifications.
      </p>

      <Slider {...settings}>
        {certificates.map(({ id, title, description, file }) => (
          <div key={id} className="p-4">
            <div className="bg-white rounded shadow p-6 flex flex-col items-center">
              <Image
                src={`/${file}`}
                alt={title}
                width={800}
                height={600}
                className="max-w-full h-auto object-contain mb-4"
                priority={false}
              />
              <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 mt-2 text-center">{description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificatePage;
