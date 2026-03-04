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

function StatBlock({ number, title, t }) {
  return (
    <motion.div
      className="p-2 lg:p-6 text-center font-gothamultra uppercase"
      variants={reducedMotion}
    >
      <div className="text-xl lg:text-5xl font-bold text-black-500 mb-3">
        {resolveText(number, t)}
      </div>
      <h3 className="text-xs lg:text-xl font-semibold text-white mb-2">
        {resolveText(title, t)}
      </h3>
    </motion.div>
  );
}

export default function StatsSection({
  heading,
  headingAccent,
  items = [],
  centerImage,
  className = "",
}) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const leftItems = items.slice(0, Math.ceil(items.length / 2));
  const rightItems = items.slice(Math.ceil(items.length / 2));

  return (
    <motion.section
      className={`py-16 px-6 lg:px-12 relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={prefersReducedMotion ? reducedMotion : fadeUpSectionStagger}
    >
      <div className="max-w-7xl mx-auto">
        {(heading || headingAccent) && (
          <div className="text-center mb-8 font-gothamultra uppercase relative z-10">
            {heading && (
              <motion.h2
                className="text-3xl lg:text-6xl text-white mb-4"
                variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
              >
                {resolveText(heading, t)}
              </motion.h2>
            )}
            {headingAccent && (
              <motion.p
                className="text-2xl lg:text-6xl text-parrot-1100"
                variants={prefersReducedMotion ? reducedMotion : fadeUpItem}
              >
                {resolveText(headingAccent, t)}
              </motion.p>
            )}
          </div>
        )}

        {centerImage && (
          <div className="block xl:hidden col-span-4 relative z-20 mb-8">
            <div className="h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={centerImage}
                alt="Stats visual"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div
          className={`grid ${
            centerImage ? "grid-cols-6 xl:grid-cols-10" : "grid-cols-2 lg:grid-cols-4"
          } gap-2 lg:gap-8 relative`}
        >
          <div className={centerImage ? "col-span-3 space-y-8" : "col-span-1 lg:col-span-2 space-y-8"}>
            {leftItems.map((item, i) => (
              <StatBlock key={i} number={item.number} title={item.title} t={t} />
            ))}
          </div>

          {centerImage && (
            <div className="hidden xl:block col-span-4 relative z-20">
              <div className="h-full min-h-[600px] rounded-lg overflow-hidden -mt-20 shadow-2xl">
                <Image
                  src={centerImage}
                  alt="Stats visual"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className={centerImage ? "col-span-3 space-y-8" : "col-span-1 lg:col-span-2 space-y-8"}>
            {rightItems.map((item, i) => (
              <StatBlock key={i} number={item.number} title={item.title} t={t} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
