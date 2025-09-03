"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingSticker() {
  const stickerRef = useRef<HTMLImageElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [floatY, setFloatY] = useState(0); // safe client-only animated offset

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate bobbing on client only
  useEffect(() => {
    let frameId: number;

    const animate = () => {
      const t = Date.now() / 500; // safe to use in client effect
      setFloatY(Math.sin(t) * 5); // -5px to +5px
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="relative">
      {/* Right-side floating sticker */}
      <img
        ref={stickerRef}
        src="/sticker.png"
        alt="Sticker"
        className="fixed bottom-3 right-0 h-50 w-50 object-contain transition-transform duration-300"
        style={{
          transform: `translateY(${Math.sin(scrollY / 50) * 5 + floatY}px)`,
        }}
      />

      {/* Left-side cat.png */}
      <img
        src="/cat.png"
        alt="Cute Cat"
        className="fixed bottom-3 left-0 h-40 w-40 object-contain transition-transform duration-300"
        style={{
          transform: `translateY(${Math.sin(scrollY / 50) * 5 + floatY}px)`,
        }}
      />
    </div>
  );
}
