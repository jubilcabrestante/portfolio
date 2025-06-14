import type { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Jueli - Mobile & Flutter Developer</title>
        <meta name="description" content="Jubil's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Header />
      <main className="flex-grow">
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default Home;