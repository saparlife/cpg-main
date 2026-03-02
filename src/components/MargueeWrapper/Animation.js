"use client";

import { useEffect, useState } from "react";

export default function MargueeAnimation({ name, rotation = -1.5, speed = 30, reverse = false }) {
  const [animatedItems, setAnimatedItems] = useState(new Set());

  useEffect(() => {
    const animateRandomItems = () => {
      // Select 2-4 random items to animate
      const itemCount = 20; // Total items
      const animateCount = Math.floor(Math.random() * 3) + 2; // 2-4 items
      const randomItems = new Set();

      while (randomItems.size < animateCount) {
        randomItems.add(Math.floor(Math.random() * itemCount));
      }

      setAnimatedItems(randomItems);

      // Clear animations after the cycle completes (4 seconds total)
      setTimeout(() => {
        setAnimatedItems(new Set());
      }, 4000);
    };

    // Start first animation after 1 second
    const initialTimeout = setTimeout(animateRandomItems, 1000);

    // Repeat every 5 seconds (4s animation + 1s pause)
    const interval = setInterval(animateRandomItems, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const rotationStyle = `rotate(${rotation}deg)`;
  const animationDuration = `${speed}s`;
  const animationDirection = reverse ? "reverse" : "normal";

  return (
    <div className="marquee-container overflow-hidden relative w-full mt-2" style={{ transform: rotationStyle }}>
      <div
        className="marquee-track flex flex-row w-max gap-[30px]"
        style={{
          animation: `marquee ${animationDuration} linear infinite ${animationDirection}`,
        }}
      >
        {new Array(20).fill(0).map((_, i) => (
          <div
            key={i}
            className={`block font-gothamultra uppercase text-5xl whitespace-nowrap transition-colors duration-1000 ease-in-out ${
              animatedItems.has(i) ? "text-white animate-color-cycle" : "text-white/10"
            }`}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
