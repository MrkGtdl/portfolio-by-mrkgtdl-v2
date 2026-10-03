"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Loader from "@/components/ui/Loader";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  const [loaderKey, setLoaderKey] = useState(0);
  const [returningHome, setReturningHome] = useState(false);

  const handleHomeClick = () => {
    setReturningHome(true);
    setLoaderKey((prev) => prev + 1);
  };

  const handleLoaderComplete = () => {
    if (!returningHome) return;

    setReturningHome(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Loader key={loaderKey} onComplete={handleLoaderComplete} />

      <Navbar onHomeClick={handleHomeClick} />

      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
