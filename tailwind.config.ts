import type { Config } from "tailwindcss";
// const withMT = require("@material-tailwind/react/utils/withMT");
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
      },
      boxShadow_two: {
        "custom-light":
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        title: ["Figtree", "sans-serif"],
        // titleTwo: ["Allison", "sans-serif"],

        // cursive_two:[ ]
      },
      fontSize: {
        h1: "72px",
        newH1: "86px",
        newH2: "76px",
        h2: "42px",
        h4: "20px",
        p: "16px",
        p2: "16px",
        black_text: "14px",
        btnSize: "14px",
      },
      lineHeight: {
        h1: "42px",
        h2: "42px",
        h4: "26px",
        p: "32px",
      },
      fontWeight: {
        h1: "500",
        h2: "500",
        h4: "500",
        p: "400",
        p2: "400",
        black_text: "600",
        btnSize: "700",
      },
      colors: {
        bg_black_light: "#00000025",
        bg_color_secendory: "#58bcb3",
        bg_color_primary: "#007200",
        bg_color_tertiary: "#e1ffd4",
        p: "#7b8893",
        p2: "white",
        black_text: "black",
        primaryText: "",
        secondaryText: "#008000",
        tertiaryText: "",
      },

      screens: {
        "max-xlg": { max: "1492px" },
        "max-xlg2": { max: "1400px" },
        "max-xlg3": { max: "1300px" },
        "max-xlg4": { max: "1200px" },
        "max-xlg5": { max: "1100px" },
        "max-lg": { max: "1024px" },
        "media-max-1050": { max: "1050px" },
        "media-max-976": { max: "976px" },
        "media-max-942": { max: "942px" },
        "media-max-900": { max: "900px" },
        "media-max-812": { max: "812px" },
        "media-max-838": { max: "838px" },
        "media-max-712": { max: "712px" },
        "media-max-594": { max: "594px" },
        "media-max-506": { max: "506px" },
        "media-max-500": { max: "500px" },
        "media-max-400": { max: "400px" },
        "media-max-480": { max: "480px" },
        "media-max-494": { max: "494px" },
        "media-max-362": { max: "362px" },
        "media-max-322": { max: "322px" },
        "media-max-778": { max: "778px" },
        "media-max-680": { max: "680px" },
        "media-max-608": { max: "608px" },
        "max-md955": { max: "955px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
        "max-lg4": { max: "1146px" },
        "max-lg2": { max: "1348px" },
        "max-lg3": { max: "1208px" },
        "between568-950": { min: "568px", max: "950px" },
        "between280-568": { min: "280px", max: "568px" },
        "between280-320": { min: "280px", max: "320px" },
      },
    },
  },
  plugins: [nextui()],
};
module.exports = (config);
