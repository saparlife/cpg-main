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

export default function ImageGrid({ columns = 3, items = [], className = "" }) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const colsClass = {
    2: "grid-cols-1 lg:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  }[columns] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <motion.section
      className={`font-gotham ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={prefersReducedMotion ? reducedMotion : fadeUpSectionStagger}
    >
      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full">
        <div className={`grid ${colsClass} gap-[20px] lg:gap-[30px]`}>
          {items.map((item, i) => {
            const spanClass = item.span === "full"
              ? "col-span-full"
              : item.span === 2
                ? "lg:col-span-2"
                : item.span === 3
                  ? "lg:col-span-3"
                  : "";

            if (item.type === "image") {
              return (
                <motion.div
                  key={i}
                  className={`${spanClass} mb-[20px] lg:mb-[30px]`}
                  variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
                >
                  <div
                    className="relative rounded-xl overflow-hidden group"
                    style={{ height: item.height || "350px" }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt || ""}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    {item.overlay && (
                      <div
                        className={`absolute inset-0 bg-black/40 flex ${
                          item.overlayPosition === "bottom"
                            ? "items-end justify-center pb-6"
                            : "items-center"
                        }`}
                      >
                        <div
                          className={`px-10 lg:px-24 uppercase font-gotham text-xl lg:text-5xl ${
                            item.overlayColor === "accent" ? "text-parrot-1100" : "text-white"
                          }`}
                        >
                          {item.overlay.map((line, j) => {
                            const text = resolveText(line.text, t);
                            const lineColor =
                              line.color === "accent" ? "text-parrot-1100" : "";
                            return (
                              <h3 key={j} className={lineColor}>
                                {text}
                              </h3>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            }

            if (item.type === "text-box") {
              const bg = item.variant === "accent"
                ? "bg-parrot-1100 text-black-1100"
                : item.variant === "border"
                  ? "border-parrot-1100 border-[5px] text-parrot-1100"
                  : "bg-parrot-1100 text-black-1100";
              return (
                <motion.div
                  key={i}
                  className={spanClass}
                  variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
                >
                  <div className={`${bg} p-8 rounded-xl h-full flex items-center justify-center`}>
                    <p className="text-xl lg:text-3xl font-gotham uppercase text-center">
                      {resolveText(item.text, t)}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return null;
          })}
        </div>
      </div>
    </motion.section>
  );
}
