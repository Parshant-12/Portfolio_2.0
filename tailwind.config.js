/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'serif'], // Add Kanit font
      },
      animation: {
        'infinite-glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 5px #886fb8, 0 0 10px #886fb8, 0 0 15px #886fb8',
          },
          '50%': {
            textShadow: '0 0 20px #886fb8, 0 0 30px #886fb8, 0 0 40px #886fb8',
          },
        },
      },
    },
  },
  plugins: [],
}