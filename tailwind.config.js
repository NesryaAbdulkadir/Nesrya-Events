/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "var(--bg-color)",
        textColor: "var(--text-color)",
        accent: "var(--accent)",
      },
      backgroundImage: {
        heroSection: "url('/HeroSection.jpg')",
      },
      fontFamily: {
        italiana: ["Italiana", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
