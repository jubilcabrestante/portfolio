import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { portfolioData } from "@/data/portfolioData";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 inline-block">
            About Me
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            {portfolioData.about.content}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
