import { title } from "process";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        title: ["Figtree", "sans-serif"],
      },
      fontSize: {
        h1: "72px",
        h2: "42px",
        h4: "20px",
        p: "16px",
        btnSize : "14px",
      },
      lineHeight: {
        h1: "42px",
        h2: "42px",
        h4: "26px",
        p: "1.8",
      },
      fontWeight: {
        h1: "500",
        h2: "500",
        h4: "500",
        p: "400",
        btnSize : "700",
      },
      colors: {
        bg_color_primary: "#008000",
        bg_color_secendory: "",
        bg_color_tertiary: "",
        p: "#7b8893",
        primaryText : "",
        secondaryText : "#008000",
        tertiaryText : "",
      },
    },
  },
  plugins: [],
};
export default config;
