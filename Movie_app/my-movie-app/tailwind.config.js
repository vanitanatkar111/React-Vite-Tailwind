/** @type {import('tailwindcss').Config} */
 export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  }
