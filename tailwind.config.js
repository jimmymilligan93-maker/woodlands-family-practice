/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#2C3A50",
        slate: "#57637B",
        cream: "#FAF7F2",
        mist: "#EDF0F5",
        terra: "#C4603A",
        charcoal: "#1E2B3C",
        silver: "#8A95A8",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant-garamond)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
