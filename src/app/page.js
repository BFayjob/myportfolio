import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FAYJOB | Cybersecurity Expert & Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Fayjob Boluwatife Michael, a cybersecurity expert and frontend developer showcasing skills, projects, and blog posts."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}
