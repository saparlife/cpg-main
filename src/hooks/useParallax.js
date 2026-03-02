"use client";

import { useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Custom hook for creating parallax scroll effects
 *
 * @param {Array} outputRange - [start, end] values for the parallax effect (e.g., [0, -60])
 * @param {Array} inputRange - [start, end] scroll progress values (default: [0, 1])
 * @returns {Object} - { ref, y } where ref should be attached to the element container
 *
 * @example
 * function MyComponent() {
 *   const { ref, y } = useParallax([0, -60]);
 *
 *   return (
 *     <div ref={ref}>
 *       <motion.div style={{ y }}>
 *         Content moves with scroll
 *       </motion.div>
 *     </div>
 *   );
 * }
 */
export function useParallax(outputRange = [0, -60], inputRange = [0, 1]) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, inputRange, outputRange);

  // Return 0 if user prefers reduced motion
  return {
    ref,
    y: prefersReducedMotion ? 0 : y,
  };
}

/**
 * Hook for hero parallax (lighter movement)
 */
export function useHeroParallax() {
  return useParallax([-20, 20]);
}

/**
 * Hook for section parallax (medium movement)
 */
export function useSectionParallax() {
  return useParallax([-40, 40]);
}

/**
 * Hook for image parallax (slower than scroll)
 */
export function useImageParallax() {
  return useParallax([0, -60]);
}
