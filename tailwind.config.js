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
          light: '#87994D', // Olive green
          dark: '#5C6B35'   // Darker olive for hover
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