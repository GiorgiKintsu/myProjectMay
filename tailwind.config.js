/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoMedium: ["medium", "sans-serif"],
        notoRegular: ["regular", "sans-serif"],
        notoSemiBold: ["semiBold", "sans-serif"],
      },
      keyframes: {
        increase: {
          "0%": { width: "0%" },
          "100%": { width: "90%" },
        },
        visibility: {
          "0%": { opacity: "0" },
          "70%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        increase: "increase 0.5s linear",
        visibility: "visibility 1s linear",
      },
    },
  },
  plugins: [],
};
