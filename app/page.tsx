import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="space-y-20">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}