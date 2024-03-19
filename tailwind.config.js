/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "978px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FF014F",
        bgColor: "#dde1e7",
        textColor: "#dde1e7",
      },
    },
  },
  plugins: [],
};
