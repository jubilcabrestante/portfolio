import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/navigation";
import Header from "./home/header";
import ShortAbout from "./home/about";
import ShortProjects from "./home/projects";
import ShortSkills from "./home/skills";
import ShortExperience from "./home/experience";
import Footer from "../components/footer";

import { motion } from "framer-motion";

const sectionVariants = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Jubil L. Cabrestante</title>
        <meta name="description" content="Jubil's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 space-y-24">
        <motion.div
          initial={sectionVariants.initial}
          whileInView={sectionVariants.whileInView}
          transition={sectionVariants.transition}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Header />
        </motion.div>

        {[ShortAbout, ShortProjects, ShortSkills, ShortExperience].map(
          (Component, i) => (
            <motion.div
              key={i}
              initial={sectionVariants.initial}
              whileInView={sectionVariants.whileInView}
              transition={sectionVariants.transition}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Component />
            </motion.div>
          )
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
