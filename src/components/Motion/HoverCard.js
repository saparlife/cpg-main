"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cardHover } from "@/lib/animations";

/**
 * HoverCard Component
 * Card with subtle hover animation
 * Scale up and lift slightly on hover
 */
export default function HoverCard({ children, className = "", as = "div", onClick, href }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionComponent = typeof as === "string" ? motion[as] : motion(as);

  return (
    <MotionComponent
      className={className}
      whileHover={prefersReducedMotion ? {} : cardHover}
      onClick={onClick}
      href={href}
    >
      {children}
    </MotionComponent>
  );
}
