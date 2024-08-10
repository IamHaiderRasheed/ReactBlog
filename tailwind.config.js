/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '980': '980px', // Custom breakpoint at 980px
        '979': '979px', 
      },
    },
  },
  plugins: [],
}
