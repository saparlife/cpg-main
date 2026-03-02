"use client";

import { useI18n } from "@/i18n/useI18n";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { heroIntroStagger, heroIntroItem, reducedMotion, viewportConfig } from "@/lib/animations";

export default function SelectedWork() {
  const { t } = useI18n();
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects with different speeds for depth
  const yTitle = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Scale effects for rich animation
  const scaleTitle = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 1.05]);
  const scaleSubtitle = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 1.1]);

  // Opacity for smooth fade
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <div ref={containerRef} className="xl:pl-[87px] md:pl-12 pl-0">
      <motion.div
        className="lg:max-w-[1221px] w-full"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={prefersReducedMotion ? reducedMotion : heroIntroStagger}
      >
        <h2 className="4xl:text-[200px] 4xl:leading-[220px] 3xl:text-[150px] 3xl:leading-[100px] 2xl:text-[175px] lg:text-[120px] md:text-[100px] sm:text-[80px] text-6xl sm:leading-[100px] md:leading-[110px] lg:leading-[130px] xl:text-[140px] xl:leading-[150px] 2xl:leading-[185px] font-black uppercase pb-[30px]">
          <div className="flex flex-col">
            <motion.span
              className="text-parrot-1100 font-gothamultra block"
              variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
              style={{
                y: prefersReducedMotion ? 0 : yTitle,
                scale: prefersReducedMotion ? 1 : scaleTitle,
                opacity: prefersReducedMotion ? 1 : opacity,
              }}
            >
              {t("Main.SelectedWork.title")}
            </motion.span>
            <motion.span
              className="text-white font-gothamultra text-xl md:text-3xl lg:text-4xl xl:text-5xl block"
              variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
              style={{
                y: prefersReducedMotion ? 0 : ySubtitle,
                scale: prefersReducedMotion ? 1 : scaleSubtitle,
                opacity: prefersReducedMotion ? 1 : opacity,
              }}
            >
              {t("Main.SelectedWork.subtitle")}
            </motion.span>
          </div>
        </h2>
      </motion.div>
    </div>
  );
}
