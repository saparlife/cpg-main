"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  heroIntroStagger,
  heroIntroItem,
  reducedMotion,
} from "@/lib/animations";

/**
 * AnimatedText Component
 * For hero headings and titles with line-by-line stagger
 * Splits text by lines and animates each line separately
 */
export default function AnimatedText({
  children,
  className = "",
  as = "h1",
  lines = null,
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as];

  // If lines array is provided, use it; otherwise render as single element
  if (lines && Array.isArray(lines)) {
    return (
      <MotionComponent
        className={className}
        initial="hidden"
        animate="visible"
        variants={prefersReducedMotion ? reducedMotion : heroIntroStagger}
      >
        {lines.map((line, index) => (
          <motion.span
            key={index}
            variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
            style={{ display: "block" }}
          >
            {line}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      animate="visible"
      variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
    >
      {children}
    </MotionComponent>
  );
}
