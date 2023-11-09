/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': "'Roboto', sans-serif;"
    },
    extend: {
      colors: {
        'primary-color': '#13b5ea'
      }
    },
  },
  daisyui: {
    themes: ['light']
  },
  plugins: [require("daisyui")],
}

