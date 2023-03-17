/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/views/welcome.blade.php",
    "./resources/**/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sofia': ['Sofia Sans', 'sans-serif'],
      },
      fontWeight: {
        bolder: 900,
        bold: 700,
        medium: 500,
        light: 300
      },
    },
  },
  plugins: [],
}
