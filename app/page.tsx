import CommandPalette from "@/components/CommandPalette";
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
import SectionNav from "@/components/SectionNav";
import ScrollProgress from "@/components/ScrollProgress";
import KeyboardNav from "@/components/KeyboardNav";
import ConsoleSignature from "@/components/ConsoleSignature";

export default function Home() {
  return (
    <main>
      <CommandPalette />
      <ScrollProgress />
      <SectionNav />
      <KeyboardNav />
      <ConsoleSignature />
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
