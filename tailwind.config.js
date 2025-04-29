/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // คุณสามารถกำหนดสีหลักของแบรนด์ที่นี่
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e", // สีหลัก
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      fontFamily: {
        sans: ["Prompt", "Sarabun", "sans-serif"],
      },
      spacing: {
        // กำหนดค่า spacing พิเศษเพิ่มเติม
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        // กำหนดค่า borderRadius พิเศษเพิ่มเติม
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        // กำหนด shadow พิเศษเพิ่มเติม
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        card: "0 2px 5px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
