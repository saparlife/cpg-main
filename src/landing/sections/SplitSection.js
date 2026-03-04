"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import { fadeUpSection, reducedMotion, viewportConfig } from "@/lib/animations";
import resolveText from "../utils/resolveText";

function RenderContent({ content, t }) {
  if (!content) return null;

  if (content.type === "text") {
    return (
      <div className={`font-gotham uppercase flex flex-col ${content.className || ""}`}>
        {content.lines?.map((line, i) => {
          const text = resolveText(line.text, t);
          const colorClass = line.color === "accent" ? "text-parrot-1100" : "text-white";
          const sizeClass = line.size === "xl"
            ? "text-4xl lg:text-7xl xl:text-8xl"
            : line.size === "2xl"
              ? "text-2xl lg:text-8xl xl:text-9xl"
              : line.size === "lg"
                ? "text-xs lg:text-4xl"
                : "text-xl lg:text-2xl";
          return (
            <h2 key={i} className={`${sizeClass} ${colorClass}`}>
              {text}
            </h2>
          );
        })}
        {content.description && (
          <div className="h-full flex items-center">
            <p className="text-xs lg:text-4xl text-parrot-1100">
              {resolveText(content.description, t)}
            </p>
          </div>
        )}
      </div>
    );
  }

  if (content.type === "feature-list") {
    const items = resolveText(content.items, t);
    const itemsArray = Array.isArray(items) ? items : [];
    return (
      <div
        className="bg-parrot-1100 px-12 py-12 lg:py-24 relative"
        style={
          content.backgroundImage
            ? {
                backgroundImage: `url(${content.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <ul className="space-y-4 xl:space-y-8 relative z-10">
          {itemsArray.map((item, index) => (
            <li key={index} className="flex items-center gap-4 justify-start">
              <span className="text-2xl xl:text-4xl font-gothamultra text-black min-w-[3rem]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm uppercase xl:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (content.type === "image") {
    return (
      <div className="relative rounded-xl overflow-hidden h-full min-h-[200px] lg:min-h-[350px]">
        <Image src={content.src} alt={content.alt || ""} fill className="object-cover" />
        {content.overlay && (
          <div className="absolute inset-0 bg-black/40 flex items-center">
            <div className="text-white px-10 lg:px-24 uppercase font-gotham text-xl lg:text-5xl">
              {content.overlay.map((line, i) => {
                const text = resolveText(line.text, t);
                const colorClass = line.color === "accent" ? "text-parrot-1100" : "";
                return (
                  <h3 key={i} className={`font-gotham ${colorClass}`}>
                    {text}
                  </h3>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (content.type === "description-box") {
    return (
      <div
        className="space-y-6 bg-parrot-1100 p-8 rounded-lg h-full flex items-center relative overflow-hidden"
      >
        {content.backgroundImage && (
          <Image
            src={content.backgroundImage}
            alt="Background decoration"
            fill
            className="object-cover z-10"
          />
        )}
        <h4 className="text-md leading-tight xl:text-2xl text-center uppercase text-black-1100 font-gothamultra relative z-20">
          {(content.lines || []).map((line, i) => (
            <span key={i}>
              {resolveText(line, t)}
              {i < content.lines.length - 1 && <><br /><br /></>}
            </span>
          ))}
        </h4>
      </div>
    );
  }

  if (content.type === "points-list") {
    return (
      <div className={content.className || ""}>
        {content.title && (
          <h2 className="text-5xl lg:text-7xl leading-tight uppercase mb-5 text-parrot-1100 font-gotham">
            {resolveText(content.title, t)}
          </h2>
        )}
        {content.subtitle && (
          <p className="text-lg leading-tight lg:text-2xl text-white font-gotham">
            {resolveText(content.subtitle, t)}
          </p>
        )}
        {content.items?.map((item, i) => (
          <div key={i} className="flex items-start gap-4 mb-4">
            {item.number && (
              <span className="text-2xl font-gothamultra text-parrot-1100 min-w-[3rem]">
                {item.number}
              </span>
            )}
            <span className="text-sm lg:text-lg text-white font-gotham">
              {resolveText(item.text, t)}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default function SplitSection({
  ratio = "60/40",
  left,
  right,
  className = "",
  decorationImage,
}) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const [leftSpan, rightSpan] = ratio.split("/").map(Number);
  const total = leftSpan + rightSpan;
  const leftCols = Math.round((leftSpan / total) * 10);
  const rightCols = 10 - leftCols;

  return (
    <motion.section
      className={`pt-16 font-gotham relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={prefersReducedMotion ? reducedMotion : fadeUpSection}
    >
      {decorationImage && (
        <Image
          src={decorationImage}
          alt="Overlay decoration"
          width={400}
          height={400}
          className="absolute top-[116px] right-[20px] lg:top-auto lg:bottom-0 lg:left-[37%] xl:left-[30%] z-40 w-[100px] h-[100px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] object-contain pointer-events-none"
        />
      )}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 relative z-10">
        <div className={`lg:col-span-${leftCols} px-6 lg:px-12`}>
          <RenderContent content={left} t={t} />
        </div>
        <div className={`lg:col-span-${rightCols}`}>
          <RenderContent content={right} t={t} />
        </div>
      </div>
    </motion.section>
  );
}
