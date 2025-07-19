import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

const ExperiencePage = () => {
  return (
    <>
      <Navigation />
      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
            Experience
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Here you can showcase your professional experience, including job
            roles, responsibilities, and achievements.
          </p>

          {/* TODO: Add your experience components or timeline here */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ExperiencePage;
