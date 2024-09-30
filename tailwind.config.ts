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
  darkMode : "class",
  theme: {
    accordion: {
      defaultProps: {
        icon: undefined,
        className: "",
        animate: {
          unmount: {},
          mount: {},
        },
        disabled: false,
      },
      styles: {
        base: {
          container: {
            display: "block",
            position: "relative",
            width: "w-full",
          },
          header: {
            initial: {
              display: "flex",
              justifyContent: "justify-between",
              alignItems: "items-center",
              width: "w-full",
              py: "py-4",
              borderWidth: "border-b border-b-blue-gray-100",
              color: "text-red-600",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-xl",
              textAlign: "text-left",
              fontWeight: "font-semibold",
              lineHeight: "leading-snug",
              userSelect: "select-none",
              hover: "hover:text-red-600",
              transition: "transition-colors",
            },
            active: { color: "text-blue-gray-900" },
            icon: {
              ml: "ml-4",
            },
          },
          body: {
            display: "block",
            width: "w-full",
            py: "py-4",
            color: "text-gray-700",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-light",
            lineHeight: "leading-normal",
          },
          disabled: {
            pointerEvents: "pointer-events-none",
            opacity: "opacity-50",
          },
        },
      },
    },

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
        bg_black_light : "#00000025",
        bg_color_primary: "#008000",
        bg_color_secendory: "#5a9e7c",
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
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
        "max-lg4": { max: "1146px" },
        "max-lg2": { max: "1348px" },
        "max-lg3": { max: "1208px" },
      },
    },
  },
  plugins: [ nextui()],
};
module.exports = withMT(config);
