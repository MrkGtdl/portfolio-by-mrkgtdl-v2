"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 8;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setDone(true);
        }, 500);
      }

      setProgress(Math.floor(value));
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] transition-all duration-700 ${
        progress === 100 ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-32 w-32 items-center justify-center">
        {/* Progress Ring */}
        <svg
          className="absolute inset-0 h-full w-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="289"
            strokeDashoffset={289 - (289 * progress) / 100}
            className="transition-all duration-200"
          />
        </svg>

        {/* Logo */}
        <img src="/icon2.png" alt="Logo" className="h-34 w-34 object-contain" />
      </div>

      {/* Percentage */}
      <span className="absolute bottom-10 right-10 font-mono text-xs tracking-[0.2em] text-white/50">
        {String(progress).padStart(3, "0")}%
      </span>
    </div>
  );
}
