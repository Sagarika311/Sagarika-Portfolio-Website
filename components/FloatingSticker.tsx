"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FloatingSticker() {
  const stickerRef = useRef<HTMLImageElement | null>(null);
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

  const transformStyle = {
    transform: `translateY(${Math.sin(scrollY / 50) * 5 + floatY}px)`,
  };

  return (
    <div className="relative">
      {/* Right-side floating sticker */}
      <div
        className="fixed bottom-3 h-30 w-30 transition-transform duration-300"
        style={{ ...transformStyle, right: '2px' }} // shifted from right
      >
        <Image
          ref={stickerRef}
          src="/sticker.png"
          alt="Sticker"
          width={170} // inc
          height={160}
          className="object-contain"
        />
      </div>
      {/* Left-side cat.png */}
      <div
        className="fixed bottom-3 h-20 w-20 transition-transform duration-300"
        style={{ ...transformStyle, left: '10px' }}
      >
        <Image
          src="/cat.png"
          alt="Cute Cat"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
    </div>
  );
}
