/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#245F73',
        accent: {
          light: '#F2F0EF',
          muted: '#BBBDBC',
          deep: '#245F73',
          brown: '#733E24',
        },
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