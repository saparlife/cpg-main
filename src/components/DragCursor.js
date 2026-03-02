"use client";

import { useState } from "react";

/**
 * DragCursor Component
 *
 * A reusable wrapper component that adds a custom drag cursor effect to any swiper.
 *
 * Usage:
 * ```jsx
 * import DragCursor from "@/components/DragCursor";
 *
 * <DragCursor>
 *   <Swiper className="workSwiper">
 *     // Your swiper slides here
 *   </Swiper>
 * </DragCursor>
 * ```
 *
 * Note: Make sure your Swiper has the class "workSwiper" for the cursor styling to apply.
 */
export default function DragCursor({ children }) {
  const [cursorPosition, setCursorPosition] = useState({ x: -999, y: -999 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseEnter = () => {
    setShowCustomCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCustomCursor(false);
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="drag-cursor z-[9999] transition-opacity duration-200"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: "translate(-50%, -50%)",
          opacity: showCustomCursor ? 1 : 0,
        }}
      >
        <span className="drag-cursor-left-arrow"></span>
        <span className="drag-cursor-right"></span>
        <span className="drag-cursor-right-arrow"></span>
      </div>

      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </>
  );
}
