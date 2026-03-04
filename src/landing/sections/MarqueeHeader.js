"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/useI18n";
import resolveText from "../utils/resolveText";

function MarqueeRow({ text, rotation = -1.5, speed = 30, reverse = false }) {
  const [animatedItems, setAnimatedItems] = useState(new Set());

  useEffect(() => {
    const animateRandomItems = () => {
      const itemCount = 20;
      const animateCount = Math.floor(Math.random() * 3) + 2;
      const randomItems = new Set();
      while (randomItems.size < animateCount) {
        randomItems.add(Math.floor(Math.random() * itemCount));
      }
      setAnimatedItems(randomItems);
      setTimeout(() => setAnimatedItems(new Set()), 4000);
    };
    const initialTimeout = setTimeout(animateRandomItems, 1000);
    const interval = setInterval(animateRandomItems, 5000);
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="marquee-container overflow-hidden relative w-full mt-2"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className="marquee-track flex flex-row w-max gap-[30px]"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {new Array(20).fill(0).map((_, i) => (
          <div
            key={i}
            className={`block font-gothamultra uppercase text-5xl whitespace-nowrap transition-colors duration-1000 ease-in-out ${
              animatedItems.has(i) ? "text-white animate-color-cycle" : "text-white/10"
            }`}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeHeader({ text, rows }) {
  const { t } = useI18n();
  const resolvedText = resolveText(text, t);

  const defaultRows = [
    { speed: 25, reverse: false },
    { speed: 35, reverse: true },
    { speed: 30, reverse: false },
  ];

  const rowConfigs = rows || defaultRows;

  return (
    <div className="relative py-6 !h-[250px] lg:!h-[300px] overflow-hidden">
      {rowConfigs.map((row, i) => (
        <MarqueeRow
          key={i}
          text={resolvedText}
          rotation={row.rotation ?? -1.5}
          speed={row.speed ?? 30}
          reverse={row.reverse ?? false}
        />
      ))}
    </div>
  );
}
