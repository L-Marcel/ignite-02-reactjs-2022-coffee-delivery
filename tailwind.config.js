/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
    "!./node_modules",
    "./app/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        baloo: ["'Baloo 2'", "cursive"],
        roboto: ["'Roboto'", "sans-serif"]
      },
      gridTemplateColumns: {
        "checkout-form": "20fr 28fr 6fr",
      }
    },
    colors: {
      yellow: {
        default: "#DBAC2C",
        dark: "#C47F17",
        light: "#F1E9C9"
      },
      purple: {
        default: "#8047F8",
        dark: "#4B2995",
        light: "#EBE5F9"
      },
      base: {
        title: "#272221",
        subtitle: "#403937",
        text: "#574F4D",
        label: "#8D8686",
        hover: "#D7D5D5",
        button: "#E6E5E5",
        input: "#EDEDED",
        card: "#F3F2F2",
        background: "#FAFAFA",
        white: "#FFFFFF"
      }
    }
  },
  variants: {
    extends: {
      scrollbar: ["dark"]
    }
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
