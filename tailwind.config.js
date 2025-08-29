/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066cc',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        aldrich: ['Aldrich', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 