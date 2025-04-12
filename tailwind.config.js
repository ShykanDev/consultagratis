/** @type {import('tailwindcss').Config} */
import tailwindCssAnimate from 'tailwindcss-animated'
export default {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
    },
  },
  },
  plugins: [tailwindCssAnimate],
}
