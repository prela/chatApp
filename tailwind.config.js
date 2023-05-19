/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "eastern-blue": {
          50: "#edfbfe",
          100: "#d2f3fb",
          200: "#abe7f6",
          300: "#71d5ef",
          400: "#30b8e0",
          500: "#149eca",
          600: "#137ca7",
          700: "#176487",
          800: "#1b536f",
          900: "#1b465e",
          950: "#0c2c40",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
