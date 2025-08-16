/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",       // If you keep code under src/
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Reusable UI components
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0D80F2",
          dark: "#17154D",
          gray: "#61758A",
        },
        neutral: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#F5F5F5",
          600: "#666666",
          700: "#333333",
          900: "#0D0D0D",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
