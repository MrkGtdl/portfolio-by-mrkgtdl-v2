import Navbar from "@/components/layout/Navbar";
import Loader from "@/components/ui/Loader";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Loader />

      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
