"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUpSection,
  reducedMotion,
  viewportConfig,
} from "@/lib/animations";

/**
 * AnimatedSection Component
 * Wrapper for sections that animate when scrolled into view
 * Automatically handles reduced motion preferences
 */
export default function AnimatedSection({
  children,
  className = "",
  viewport = viewportConfig,
  as = "section",
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={prefersReducedMotion ? reducedMotion : fadeUpSection}
    >
      {children}
    </MotionComponent>
  );
}
