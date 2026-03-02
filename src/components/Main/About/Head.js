"use client";

import { useI18n } from "@/i18n/useI18n";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroIntroStagger, heroIntroItem, reducedMotion, viewportConfig } from "@/lib/animations";
import { useRef } from "react";

export default function Head() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateWhat = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
  const rotateWe = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);
  const rotateDo = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <div ref={containerRef} className="lg:pb-[300px] sm:pb-20 pb-10">
      <motion.h1
        className="2xl:text-[245.542px] xl:text-[180px] lg:text-[160px] sm:text-[140px] text-6xl sm:leading-[150px] lg:leading-[170px] xl:leading-[180px] 2xl:leading-[200px] font-gotham uppercase"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={prefersReducedMotion ? reducedMotion : heroIntroStagger}
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        <motion.span
          className="text-stroke text-transparent block"
          variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
          style={{ rotateZ: prefersReducedMotion ? 0 : rotateWhat }}
        >
          {t("Main.Head.what")}
        </motion.span>
        <motion.div
          className="flex items-center sm:gap-9 gap-5 sm:py-0 py-3"
          variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
        >
          <motion.span
            className="block 2xl:text-[170px] xl:text-[150px] lg:text-[130px] md:text-[120px] sm:text-[80px] text-4xl sm:leading-[100px] md:leading-[130px] lg:leading-[150px] xl:leading-[160px]  2xl:leading-[180px] text-white"
            style={{ rotateZ: prefersReducedMotion ? 0 : rotateWe }}
          >
            {t("Main.Head.we")}
          </motion.span>
          <motion.span
            className="block 2xl:text-[170px] xl:text-[150px] lg:text-[130px] md:text-[120px] sm:text-[80px] text-4xl sm:leading-[100px] md:leading-[130px] lg:leading-[150px] xl:leading-[160px]  2xl:leading-[180px] text-parrot-1100"
            style={{ rotateZ: prefersReducedMotion ? 0 : rotateDo }}
          >
            {t("Main.Head.do")}
          </motion.span>
        </motion.div>
      </motion.h1>
    </div>
  );
}
