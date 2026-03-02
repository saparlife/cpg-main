"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * ParallaxImage Component
 * Image with scroll-linked parallax movement
 * Creates depth and premium feel by moving slower/faster than scroll
 */
export default function ParallaxImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  outputRange = [0, -60],
  children,
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], outputRange);

  return (
    <div ref={ref} className={containerClassName}>
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : y }}
        className={className}
      >
        {children || (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        )}
      </motion.div>
    </div>
  );
}
