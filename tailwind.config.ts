
import { title } from "process";
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        // titleTwo: ["Allison", "sans-serif"],


        // cursive_two:[ ]
      },
      fontSize: {
        h1: "72px",
        h2: "42px",
        h4: "20px",
        p: "16px",
        p2:"16px",
        black_text:'14px',
        btnSize : "14px",
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
        black_text:'600',
        btnSize : "700",
      },
      colors: {
        bg_color_primary: "#008000",
        bg_color_secendory: "#5a9e7c",
        bg_color_tertiary: "#e1ffd4",
        p: "#7b8893",
        p2:"white",
        black_text:'black',
        primaryText : "",
        secondaryText : "#008000",
        tertiaryText : "",
      },

      screens: {
        'max-semixl': {'max': '1100px'},

        'max-xl': {'max': '1280px'},

        'max-lg': {'max': '1024px'},
        'max-md': {'max': '712px'},
        'max-sm': {'max': '640px'},

        'min-xl': {'min': '1100px'},

      }
    },
  },
  plugins: [ nextui()],
};
module.exports = withMT(config);
