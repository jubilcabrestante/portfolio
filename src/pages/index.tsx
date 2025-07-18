import Head from "next/head";
import Navigation from "../components/Navigation";
import Header from "./home/header";
import ShortAbout from "./home/about";
import ShortProjects from "./home/projects";
import ShortSkills from "./home/Skills";
import ShortExperience from "./home/experience";
import Footer from "../components/Footer";
import SectionWrapper from "../components/utils/section_wrapper";

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
        <SectionWrapper>
          <Header />
        </SectionWrapper>

        {[ShortAbout, ShortProjects, ShortSkills, ShortExperience].map(
          (Component, i) => (
            <SectionWrapper key={i}>
              <Component />
            </SectionWrapper>
          )
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
