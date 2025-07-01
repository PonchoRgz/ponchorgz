/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0F1720',  // Dark navy background
          card: '#1A2634'   // Slightly lighter navy for cards
        },
        primary: {
          light: '#3B82F6', // Modern blue
          dark: '#2563EB'   // Darker blue for hover
        },
        accent: {
          light: '#8B4513', // Earth brown
          dark: '#5A2D0C'   // Darker brown for dark mode
        }
      }
    }
  },
  plugins: [],
} 