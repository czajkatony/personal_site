/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      myBlue: '#0092CA',
      myWhite: '#FBFBF2',
      myRose: '#C78283',
      myPurple: '#4B4A67',
      myBrown: '#564E58'
    },
  },
  plugins: [],
}
