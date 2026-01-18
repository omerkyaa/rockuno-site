/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rockuno: {
          blue: "#2D4BFF",
          purple: "#7B2FFF",
          pink: "#C026D3",
          orange: "#FF7A1A",
          yellow: "#FFB000",
          ink: "#0B0F1A",
        },
      },
      boxShadow: {
        soft: "0 10px 40px rgba(11, 15, 26, 0.12)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-smooth": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 8s linear infinite",
        scroll: "scroll 30s linear infinite",
        "scroll-fast": "scroll 20s linear infinite",
        "scroll-smooth": "scroll-smooth 40s linear infinite",
      },
    },
  },
  plugins: [],
};

