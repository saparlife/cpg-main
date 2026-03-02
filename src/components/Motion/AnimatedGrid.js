"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUpItemStagger,
  fadeUpItem,
  reducedMotion,
  viewportConfig,
} from "@/lib/animations";

/**
 * AnimatedGrid Component
 * Wrapper for grid/list items that animate with stagger effect
 * Use for cards, service items, portfolio items, etc.
 */
export default function AnimatedGrid({
  children,
  className = "",
  viewport = viewportConfig,
  as = "div",
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={prefersReducedMotion ? reducedMotion : fadeUpItemStagger}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * AnimatedGridItem Component
 * Individual item within AnimatedGrid
 */
export function AnimatedGridItem({ children, className = "", as = "div" }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
    >
      {children}
    </MotionComponent>
  );
}
