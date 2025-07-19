import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <section className="py-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
        <div className="container mx-auto max-w-3xl">
          <SectionWrapper>
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-blue-500 inline-block">
              Contact Me
            </h2>
          </SectionWrapper>

          <SectionWrapper>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              I'm always open to collaborating on new projects, exploring
              creative ideas, or contributing to meaningful work. Feel free to
              get in touch!
            </p>

            <div className="text-gray-700 text-lg space-y-2 mb-4">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:jubilcabrestante.work@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  jubilcabrestante.work@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+639926273091"
                  className="text-blue-600 hover:underline"
                >
                  +639926273091
                </a>
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
