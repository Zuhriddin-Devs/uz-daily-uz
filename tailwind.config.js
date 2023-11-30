/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '180%': '180%',
      },
      minWidth: {
        '260px': '260px',
      },
    },
  },
  plugins: [],
}