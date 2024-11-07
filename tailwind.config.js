/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  colors: {
   black: "#0E0C0C",
   white: "#F6EFEF",
   accent: "#EF3340",
   grey: "#2F2C2C",
   lightGrey: "#AFAAAA",
   test: "#413C3C",
   darkGrey: "#121212",
  },
 },
 keyframes: {
  wave: {
   "50%": { height: "20%" },
   "100%": { height: "100%" },
  },
 },
 animation: {
  wave: "wave 1.2s linear infinite",
 },
 plugins: [],
};
