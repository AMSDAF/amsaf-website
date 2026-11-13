"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function HeroHeaderSurface({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const surface = ref.current;
    if (!surface) return;

    const syncSurface = () =>
      surface.toggleAttribute("data-scrolled", window.scrollY > 0);

    syncSurface();
    window.addEventListener("scroll", syncSurface, { passive: true });
    return () => window.removeEventListener("scroll", syncSurface);
  }, []);

  return (
    <div ref={ref} className="hero-experiment-header">
      {children}
    </div>
  );
}
