"use client";

import { useState, useEffect } from "react";

export default function DragCursor({ children }) {
  const [cursorPosition, setCursorPosition] = useState({ x: -999, y: -999 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 992);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  if (!isDesktop) {
    return children;
  }

  return (
    <>
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
        onMouseEnter={() => setShowCustomCursor(true)}
        onMouseLeave={() => setShowCustomCursor(false)}
      >
        {children}
      </div>
    </>
  );
}
