"use client";

import { usePathname } from "next/navigation";
import Loader from "@/components/ui/Loader";

export default function RouteTransition() {
  const pathname = usePathname();

  return (
    <Loader
      key={pathname}
      onComplete={() => {
        window.dispatchEvent(new CustomEvent("portfolio:loader-complete"));
      }}
    />
  );
}
