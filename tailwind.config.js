/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-col": "#150E28",
        "sec-col": "#903AFF",
        "tet-col": "#D434FE",
        "glass": "rgba(255, 255, 255, 0.03)",

      },
      fontFamily: {
        clashDisplay: ["ClashDisplay-Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
}

