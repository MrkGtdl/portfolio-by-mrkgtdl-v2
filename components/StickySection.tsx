"use client";

import type { ReactNode } from "react";

type StickySectionProps = {
  children: ReactNode;
  index: number;
  className?: string;
};

export default function StickySection({
  children,
  index,
  className = "",
}: StickySectionProps) {
  return (
    <div className={`relative ${className}`} style={{ zIndex: index }}>
      <div className="relative lg:sticky lg:top-20">{children}</div>
    </div>
  );
}
