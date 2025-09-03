/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],  // Maps to Inter font
        serif: ['Merriweather', 'serif'], // Example serif pairing for headings
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        relaxed: '1.625',
        normal: '1.5',
      },
      letterSpacing: {
        tight: '-0.015em',
        normal: '0',
        wide: '0.015em',
      },
    },
  },
  plugins: [],
};

