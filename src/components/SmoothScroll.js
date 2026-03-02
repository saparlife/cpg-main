"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll Component
 * Implements premium smooth scrolling behavior using Lenis
 * Provides the gliding, continuous scroll feel similar to rise2.studio
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false, // Keep native touch scrolling on mobile
      touchMultiplier: 2,
      infinite: false,
    });

    // Update scroll on each frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
