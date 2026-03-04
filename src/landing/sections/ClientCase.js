"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import {
  fadeUpSection,
  fadeUpItem,
  reducedMotion,
  viewportConfig,
} from "@/lib/animations";
import resolveText from "../utils/resolveText";

export default function ClientCase({
  title,
  year,
  subtitle,
  description,
  images = [],
  metrics = [],
  decorationImage,
  layout = "30/70",
  className = "",
}) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const [leftSpan, rightSpan] = layout.split("/").map(Number);
  const total = leftSpan + rightSpan;
  const leftCols = Math.round((leftSpan / total) * 10);
  const rightCols = 10 - leftCols;

  return (
    <motion.section
      className={`py-20 lg:py-16 font-gotham relative mt-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={prefersReducedMotion ? reducedMotion : fadeUpSection}
    >
      {decorationImage && (
        <Image
          src={decorationImage}
          alt="Overlay decoration"
          width={700}
          height={700}
          className="absolute z-40 -top-[30px] left-1/2 transform -translate-x-1/2 w-[300px] h-auto lg:translate-0 lg:top-[-30px] lg:left-[50px] lg:w-[400px] lg:h-[400px] xl:translate-0 xl:top-[-100px] xl:left-[50px] xl:w-[700px] xl:h-[700px] object-contain pointer-events-none"
        />
      )}
      <div className="max-w-[1640px] px-[20px] md:px-[60px] mx-auto w-full relative z-20">
        {/* Title Section */}
        {(title || year) && (
          <div className="flex justify-between mb-6">
            <div className="flex-2 hidden lg:block" />
            <div className="flex-1">
              {title && (
                <h2 className="text-7xl text-center lg:text-left lg:text-8xl xl:text-9xl text-white font-gotham uppercase">
                  {resolveText(title, t)}
                </h2>
              )}
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-[40px]">
                {year && (
                  <h2 className="text-4xl text-center lg:text-left lg:text-8xl xl:text-9xl text-stroke-parrot text-transparent font-gotham">
                    {resolveText(year, t)}
                  </h2>
                )}
                {subtitle && (
                  <>
                    <h2 className="hidden lg:block text-2xl text-parrot-1100 font-gotham uppercase">
                      {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((line, i) => (
                        <span key={i}>
                          {resolveText(line, t)}
                          {i < (Array.isArray(subtitle) ? subtitle.length : 1) - 1 && <br />}
                        </span>
                      ))}
                    </h2>
                    <h2 className="block lg:hidden text-[26px] text-parrot-1100 font-gotham uppercase text-center">
                      {(Array.isArray(subtitle) ? subtitle : [subtitle])
                        .map((line) => resolveText(line, t))
                        .join(" ")}
                    </h2>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 font-gotham">
          {/* Left Column - Description */}
          <div className={`lg:col-span-${leftCols}`}>
            <div className="space-y-6 bg-parrot-1100 p-8 rounded-lg h-full flex items-center relative overflow-hidden">
              <Image
                src="/images/shape7.svg"
                alt="Background decoration"
                fill
                className="object-cover z-10"
              />
              <h4 className="text-md leading-tight xl:text-2xl text-center uppercase text-black-1100 font-gothamultra relative z-20">
                {(Array.isArray(description) ? description : [description]).map((line, i) => (
                  <span key={i}>
                    {resolveText(line, t)}
                    {i < (Array.isArray(description) ? description.length : 1) - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </h4>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className={`lg:col-span-${rightCols}`}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
              {images.map((img, i) => (
                <div key={i} className="relative group overflow-hidden rounded-xl">
                  <Image
                    src={img}
                    alt={`Activity ${i + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-[150px] lg:h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        {metrics.length > 0 && (
          <div className="flex flex-wrap gap-8 mt-12 justify-center">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl lg:text-5xl font-gothamultra text-parrot-1100">
                  {resolveText(metric.value, t)}
                </div>
                <p className="text-sm lg:text-lg text-white uppercase mt-2">
                  {resolveText(metric.label, t)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
}
