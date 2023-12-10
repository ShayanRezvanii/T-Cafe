/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Iran-Sans' : ["Iran-Sans"]
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}