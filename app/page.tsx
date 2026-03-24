import Hero from "@/components/Hero";
import MetricsBar from "@/components/MetricsBar";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsBar />
      <About />
      <FeaturedProject />
      <Projects />
      <Recognition />
      <Experience />
      <Skills />
      <Currently />
      <Contact />
    </main>
  );
}
