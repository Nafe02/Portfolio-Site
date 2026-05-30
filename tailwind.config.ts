import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E10600",
        ink: "#0A0A0A",
        muted: "#5C5C5C",
        border: "#E8E8E8",
      },
      fontFamily: {
        sans: ["Switzer", "system-ui", "sans-serif"],
        display: ["Khand", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
