"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import {
  fadeUpSectionStagger,
  fadeUpItem,
  reducedMotion,
  viewportConfig,
} from "@/lib/animations";
import resolveText from "../utils/resolveText";

export default function FeatureList({
  items,
  title,
  subtitle,
  backgroundImage,
  backgroundColor = "accent",
  className = "",
}) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const resolvedItems = resolveText(items, t);
  const itemsArray = Array.isArray(resolvedItems) ? resolvedItems : [];

  const bgClass =
    backgroundColor === "accent"
      ? "bg-parrot-1100 text-black"
      : backgroundColor === "dark"
        ? "bg-black-1100 text-white"
        : "bg-parrot-1100 text-black";

  return (
    <motion.section
      className={`py-16 font-gotham ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={prefersReducedMotion ? reducedMotion : fadeUpSectionStagger}
    >
      {(title || subtitle) && (
        <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full mb-8">
          {title && (
            <motion.h2
              className="text-4xl lg:text-7xl xl:text-8xl text-white uppercase"
              variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
            >
              {resolveText(title, t)}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              className="text-xl lg:text-3xl text-parrot-1100 uppercase mt-2"
              variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
            >
              {resolveText(subtitle, t)}
            </motion.p>
          )}
        </div>
      )}
      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full">
        <div
          className={`${bgClass} px-12 py-12 lg:py-24 rounded-xl relative`}
          style={
            backgroundImage
              ? {
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }
              : {}
          }
        >
          <ul className="space-y-4 xl:space-y-8 relative z-10">
            {itemsArray.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 justify-start"
                variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
              >
                <span className="text-2xl xl:text-4xl font-gothamultra min-w-[3rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm uppercase xl:text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
