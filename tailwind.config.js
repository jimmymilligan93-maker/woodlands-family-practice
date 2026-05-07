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
        terra: "#9C4226",
        charcoal: "#1E2B3C",
        silver: "#6D7789",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant-garamond)", "serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
