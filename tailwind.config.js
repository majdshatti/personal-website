/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prim: {
          50: "rgb(250,247,244)",
          100: "rgb(245,239,234)",
          200: "rgb(234,223,213)",
          300: "rgb(229,216,203)",
          400: "rgb(202,177,154)",
          500: "rgb(197,170,144)",
          600: "rgb(179,153,127)",
          700: "rgb(161,136,111)",
          800: "rgb(144,119,95)",
          900: "rgb(127,103,79)",
          950: "rgb(110,87,64)",
        },
        secondary: {
          500: "#1a0b42",
          600: "#0F0626FF",
          700: "#0a051d",
          800: "#070312",
        },
      },
    },
  },
  plugins: [],
};
