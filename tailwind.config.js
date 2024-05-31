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
    },
  },
  plugins: [],
};
