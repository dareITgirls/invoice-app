/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "2xl": "20px",
      },

      boxShadow: {
        "3xl": "0 10px 10px -10px rgba(72, 84, 159, 0.100397)",
        "4xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },

      width: {
        22: "5.63rem", // 90 px for button in mobile view
        46: "9.375rem", // 150 px for button in desktop view
      },

      padding: {
        14.5: "3.6875rem", //59px
        15: "3.8125rem", // 61px
        39: "9.9375rem", //159px
      },

      fontFamily: {
        sans: ["League Spartan", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        "base/1": [
          "0.8125rem", //13px
          {
            letterSpacing: "-0.25px",
            fontWeight: "500",
          },
        ],

        "base/2": [
          "0.8125rem", //13px
          {
            letterSpacing: "-0.1px",
            fontWeight: "500",
          },
        ],

        "md/1": [
          "0.9375rem", //15px
          {
            lineHeight: "0.9375rem", //15px
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],

        "md/2": [
          "0.9375rem", //15px
          {
            lineHeight: "1.5rem", //24px
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],

        lg: [
          "1.5rem", //24px
          {
            lineHeight: "1.375rem", //22px
            letterSpacing: "-0.75px",
            fontWeight: "700",
          },
        ],

        xl: [
          "2.25rem", //36px
          {
            lineHeight: "2.0625rem", //33px
            letterSpacing: "-1px",
            fontWeight: "700",
          },
        ],
      },

      colors: {
        "primary-100": "#9277FF",
        "primary-200": "#7C5DFA",
        "warning-100": "#FF8F00",
        "warning-150": "#FF8f000F", //secondary-100 with opacity 0.06
        "success-100": "#33D69F",
        "success-150": "#33D69F0F", //success-100 with opacity 0.06
        "danger-100": "#9277FF",
        "danger-150": "#EC5757",
        "light-100": "#FFFFFF",
        "light-200": "#F8F8FB",
        "neutral-200": "#DFE3FA",
        "neutral-250": "#DFE3FA0F", //neutral-200 with opacity 0.06
        "neutral-300": "#888EB0",
        "neutral-400": "#858BB2",
        "neutral-500": "#7E88C3",
        "dark-100": "#252945",
        "dark-200": "#1E2139",
        "dark-300": "#141625",
        "dark-400": "#0C0E16",
        "dark-500": "#373B53",
        "dark-550": "#373B530F", //dark-500 with opacity 0.06
        "dark-600": "#494E6E",
      },

      gridTemplateRows: {
        "item-sm": "50% 25% 25%",
      },

      maxWidth: {
        "25ch": "25ch",
      },

      minHeight: {
        33: "8.375rem", //134px
      },

      scale: {
        80: "0.8",
        140: "1.4",
      },

      spacing: {
        0.5: "0.125rem", //2px
        1.5: "0.375rem", //6px
        3.5: "1.125rem", //18px
        18: "4.5rem", //72px
        26: "6.5rem", //104px
        49.5: "12.375rem", //198px
      },

      backgroundImage: {
        checkboxImg: "url(assets/icon-check.svg)",
      },
    },
  },
  plugins: [],
};
