// app/contact/page.tsx (or your ContactPage file)
"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHome, FaPaperPlane } from "react-icons/fa";

type Hex = {
  left: string;
  top: string;
  duration: string;
  delay: string;
  size: number;
  opacity: number;
  rotate: number;
};

export default function ContactPage() {
  const [hexagons, setHexagons] = useState<Hex[]>([]);

  useEffect(() => {
    // Generate random hexagon styles only on the client to avoid hydration errors
    const generated: Hex[] = Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 6}s`,
      delay: `${Math.random() * 8}s`,
      size: 48 + Math.random() * 56, // px
      opacity: 0.08 + Math.random() * 0.28,
      rotate: Math.random() * 360,
    }));
    setHexagons(generated);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      toast.success("Message sent successfully! 🎉 Redirecting...");
      setTimeout(() => {
        window.location.href = "/thankyou";
      }, 2000);
    } else {
      toast.error("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Full-page gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700" aria-hidden />

      {/* Floating hexagons (generated client-side) */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden>
        {hexagons.map((h, i) => (
          <svg
            key={i}
            viewBox="0 0 24 24"
            width={h.size}
            height={h.size}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="absolute text-blue-400 dark:text-blue-300 animate-hexFloat"
            style={{
              left: h.left,
              top: h.top,
              opacity: h.opacity,
              animationDuration: h.duration,
              animationDelay: h.delay,
              // custom property used in the keyframes for base rotation
              ["--rot" as any]: `${h.rotate}deg`,
            }}
          >
            <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" />
          </svg>
        ))}
      </div>

      {/* Content (made larger as requested) */}
      <div className="relative z-10 max-w-4xl w-full mx-auto">
        {/* Home Button */}
        <div className="mb-5">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-2xl shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <FaHome /> Home
          </a>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

        <form
          action="https://formspree.io/f/mvgbagez"
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-2xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-400 outline-none transition"
          />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg 
                       hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:brightness-110 transform transition-all duration-300"
          >
            <FaPaperPlane /> Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-gray-600 dark:text-gray-300 text-bold font-sans">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sagarikabhagat311@gmail.com"
              className="underline hover:text-blue-500 text-bold font-sans"
            >
              sagarikabhagat311@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
