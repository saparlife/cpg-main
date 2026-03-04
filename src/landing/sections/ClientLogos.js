"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import AnimatedSection from "@/components/Motion/AnimatedSection";
import {
  logoStagger,
  logoItem,
  logoHover,
  reducedMotion,
  viewportConfig,
} from "@/lib/animations";
import resolveText from "../utils/resolveText";

export default function ClientLogos({
  title,
  logos = [],
  lastSpan = 2,
  className = "",
}) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const resolvedTitle = title ? resolveText(title, t) : null;
  const regularLogos = logos.slice(0, -1);
  const lastLogo = logos[logos.length - 1];

  return (
    <AnimatedSection
      className={`my-[20px] lg:my-[100px] lg:px-[60px] lg:pb-20 ${className}`}
      as="div"
    >
      {resolvedTitle && (
        <h3 className="font-gotham text-xl sm:text-4xl lg:text-5xl uppercase mb-2 lg:mb-10 text-parrot-1100">
          {resolvedTitle}
        </h3>
      )}
      <div className="bg-white rounded-lg p-6 py-10 bg-center bg-no-repeat bg-contain opacity-95">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={prefersReducedMotion ? reducedMotion : logoStagger}
        >
          {regularLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center p-4"
              variants={prefersReducedMotion ? reducedMotion : logoItem}
              whileHover={prefersReducedMotion ? {} : logoHover}
            >
              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={120}
                height={40}
                className="max-h-8 w-auto object-contain"
              />
            </motion.div>
          ))}
          {lastLogo && (
            <motion.div
              className={`col-span-${lastSpan} flex justify-center items-center p-4`}
              variants={prefersReducedMotion ? reducedMotion : logoItem}
              whileHover={prefersReducedMotion ? {} : logoHover}
            >
              <Image
                src={lastLogo}
                alt={`Client ${logos.length}`}
                width={240}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
