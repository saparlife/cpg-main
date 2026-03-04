"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import {
  heroIntroStagger,
  heroIntroItem,
  reducedMotion,
  viewportConfig,
} from "@/lib/animations";
import resolveText from "../utils/resolveText";

export default function CTASection({
  lines = [],
  buttonText,
  buttonHref = "/contact",
  className = "",
}) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div
      ref={containerRef}
      className={`max-w-[1340px] mx-auto w-full sm:px-5 3xl:pb-[198px] pb-[60px] sm:pb-[120px] ${className}`}
    >
      <motion.h4
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={prefersReducedMotion ? reducedMotion : heroIntroStagger}
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        {lines.map((line, i) => {
          const text = resolveText(line.text, t);
          const colorClass = line.color === "accent"
            ? "text-parrot-1100"
            : line.color === "muted"
              ? "text-white/70"
              : "text-white";
          const sizeClass = line.size === "xl"
            ? "xl:text-[145px] md:text-[120px] text-5xl sm:text-[80px] leading-[60px] sm:leading-[100px] md:leading-[130px] xl:leading-[140px] font-black uppercase"
            : line.size === "2xl"
              ? "3xl:text-[170px] xl:text-[150px] md:text-[100px] lg:pl-20 xl:pl-[168px] sm:text-[80px] text-5xl leading-[60px] sm:leading-[100px] md:leading-[120px] lg:text-[125px] lg:leading-[140px] font-black uppercase xl:leading-[160px]"
              : "xl:text-[113.912px] xl:leading-[110px] md:text-[100px] md:leading-[110px] sm:text-[80px] sm:leading-[100px] text-5xl leading-[60px] font-black uppercase";

          return (
            <motion.div
              key={i}
              className={`${colorClass} ${sizeClass}`}
              variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
            >
              {text}
            </motion.div>
          );
        })}

        {buttonText && (
          <motion.div
            className="flex md:items-center gap-3 md:flex-row flex-col md:gap-[50px] lg:gap-[70px] md:pt-10 pt-3 lg:pl-24 xl:pl-[281px]"
            variants={prefersReducedMotion ? reducedMotion : heroIntroItem}
          >
            <a
              href={buttonHref}
              className="text-[16px] lg:text-[32px] h-[81px] p-6 bg-parrot-1100 rounded-[40px] leading-6 font-gotham font-black text-black-1100 flex items-center w-full max-w-[356px] gap-[15px] justify-center uppercase hover:text-white hover:bg-transparent border border-solid border-transparent hover:border-parrot-1100 group"
            >
              {resolveText(buttonText, t)}
              <span>
                <Image
                  src="/images/double-arw.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="group-hover:invert-100"
                />
              </span>
            </a>
          </motion.div>
        )}
      </motion.h4>
    </div>
  );
}
