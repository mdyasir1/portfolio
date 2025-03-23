/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a", // Dark blue-gray
        secondary: "#38bdf8", // Sky blue
        textPrimary: "#ffffff", // White
        textSecondary: "#94a3b8", // Slate gray
        accent: "#1e293b", // Lighter blue-gray
      },
    },
  },
  plugins: [],
};
