import MainLayout from "@/components/layout/MainLayout";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/resume/Resume";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
