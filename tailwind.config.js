/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#05F28D",
        "background-dark": "#000000",
        "background-light": "#F9FAFB",
        teal: {
          DEFAULT: "#00B2A9",
          light: "#64FFDA"
        },
        accent: "#10B981",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
      boxShadow: {
        'glow-primary': '0 0 15px 0 rgba(5, 242, 141, 0.3)',
        'green-glow': '0 0 15px rgba(16, 185, 129, 0.6), 0 0 5px rgba(16, 185, 129, 0.8)',
      }
    },
  },
  plugins: [],
}

