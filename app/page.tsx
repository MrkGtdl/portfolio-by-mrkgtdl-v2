"use client";

import { useEffect, useState } from "react";

import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const handleLoaderComplete = () => {
      setHeroReady(true);
    };

    window.addEventListener("portfolio:loader-complete", handleLoaderComplete);

    return () => {
      window.removeEventListener(
        "portfolio:loader-complete",
        handleLoaderComplete,
      );
    };
  }, []);

  return (
    <main className="relative w-full overflow-visible">
      <Home startAnimation={heroReady} />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
