"use client";

import { useI18n } from "@/i18n/useI18n";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroIntroStagger, heroIntroItem, reducedMotion, viewportConfig } from "@/lib/animations";
import { useRef } from "react";

export default function CTA() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateLets = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);
  const rotateCreate = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);
  const rotateTogether = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <div ref={containerRef} className="max-w-[1340px] mx-auto w-full sm:px-5  3xl:pb-[198px] pb-[60px] sm:pb-[120px]">
      <motion.h4
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={prefersReducedMotion ? reducedMotion : heroIntroStagger}
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        <motion.div
          className="text-parrot-1100 xl:text-[145px] md:text-[120px] text-5xl sm:text-[80px] leading-[60px] sm:leading-[100px] md:leading-[130px] xl:leading-[140px] font-black uppercase"
          variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
          style={{ rotateZ: prefersReducedMotion ? 0 : rotateLets }}
        >
          {t("Main.cta.lets")}
        </motion.div>
        <motion.div
          className="3xl:text-[170px] xl:text-[150px] md:text-[100px] lg:pl-20 xl:pl-[168px] sm:text-[80px] text-5xl leading-[60px] sm:leading-[100px] md:leading-[120px] lg:text-[125px] lg:leading-[140px] font-black uppercase text-white xl:leading-[160px]"
          variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
          style={{ rotateZ: prefersReducedMotion ? 0 : rotateCreate }}
        >
          {t("Main.cta.create")}
        </motion.div>
        <motion.div
          className="flex md:items-center gap-3 md:flex-row flex-col md:gap-[50px] lg:gap-[70px] md:pt-10 pt-3 lg:pl-24 xl:pl-[281px]"
          variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
        >
          <motion.h5
            className="xl:text-[113.912px] xl:leading-[110px] md:text-[100px] md:leading-[110px] sm:text-[80px] sm:leading-[100px] text-5xl leading-[60px]  text-white/70 font-black uppercase"
            style={{ rotateZ: prefersReducedMotion ? 0 : rotateTogether }}
          >
            {t("Main.cta.together")}
          </motion.h5>
          <a
            href="/contact"
            className="text-[16px] lg:text-[32px] h-[81px] p-6 bg-parrot-1100 rounded-[40px] leading-6 font-gotham font-black text-black-1100 flex items-center w-full max-w-[356px] gap-[15px] justify-center uppercase hover:text-white hover:bg-transparent border border-solid border-transparent hover:border-parrot-1100 group"
          >
            {t("Main.cta.button")}
            <span>
              <img src="/images/double-arw.svg" alt="" className="group-hover:invert-100" />
            </span>
          </a>
        </motion.div>
      </motion.h4>
    </div>
  );
}
