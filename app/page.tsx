"use client";

import { useState } from "react";

import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Page() {
  const [heroReady, setHeroReady] = useState(false);

  return (
    <>
      {!heroReady && <Loader onComplete={() => setHeroReady(true)} />}

      <Navbar />

      <main>
        <Home startAnimation={heroReady} />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
