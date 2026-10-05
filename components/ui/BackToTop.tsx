"use client";

import { useEffect, useState } from "react";

import SlingButton from "@/components/ui/SlingButton";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    const start = window.scrollY;

    if (start <= 0) return;

    const duration = 1200;
    const startTime = performance.now();

    const easeOut = (t: number) => {
      return 1 - Math.pow(1 - t, 4);
    };

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOut(progress);

      const y = start * (1 - eased);

      window.scrollTo(0, y);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        window.scrollTo(0, 0);
      }
    };

    requestAnimationFrame(update);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-10 right-6 z-[100]">
      <SlingButton
        onSend={scrollToTop}
        size={45}
        strokeWidth={1}
        armAt={42}
        maxPull={140}
        launchSpeed={2400}
        recoil={0.18}
        flight={100}
        particles={10}
        spread={55}
        padColor="#18181b"
        iconColor="#ffffff"
        accentColor="#18181b"
        wellColor="#18181b"
        bandColor="#71717a"
        ariaLabel="Back to top"
      />
    </div>
  );
}
