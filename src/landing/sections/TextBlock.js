"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import {
  fadeUpSectionStagger,
  fadeUpItem,
  reducedMotion,
  viewportConfig,
} from "@/lib/animations";
import resolveText from "../utils/resolveText";

export default function TextBlock({
  lines = [],
  backgroundImage,
  sideImage,
  className = "",
}) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={`relative min-h-screen text-white px-6 xl:px-14 font-gotham ${className}`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-contain bg-center"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      <motion.div
        className="container mx-auto px-0 lg:px-6 py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={prefersReducedMotion ? reducedMotion : fadeUpSectionStagger}
      >
        {lines.map((line, i) => {
          const text = resolveText(line.text, t);
          const sizeClass = {
            xl: "text-6xl lg:text-9xl xl:text-[250px] font-bold leading-none mb-4",
            lg: "text-2xl lg:text-4xl font-semibold mb-0 lg:mb-32 lg:pl-12 uppercase",
            md: "text-lg md:text-xl lg:text-2xl leading-tight xl:ml-12 max-w-md",
            sm: "text-sm md:text-base lg:text-lg leading-tight",
          }[line.size || "md"];

          const colorClass = line.color === "accent"
            ? "text-parrot-1100"
            : line.color === "muted"
              ? "text-white/70"
              : "text-white";

          return (
            <motion.div
              key={i}
              variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
              className={`${sizeClass} ${colorClass}`}
              dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br />") }}
            />
          );
        })}
      </motion.div>
      {sideImage && (
        <div className="absolute bottom-0 right-0 w-full xl:w-3/5 z-40">
          <Image
            src={sideImage}
            alt="Decoration"
            width={1200}
            height={800}
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
