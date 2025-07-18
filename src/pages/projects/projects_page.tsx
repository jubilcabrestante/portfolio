import React from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <Navigation />
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 pb-2 border-b-2 inline-block">
            Projects
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-6xl">
            A showcase of my projects, demonstrating my skills and creativity.
          </p>
          {/* Add your project components or content here */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
