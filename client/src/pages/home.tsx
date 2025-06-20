import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
}
