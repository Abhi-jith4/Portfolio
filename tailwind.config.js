/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Project accent colours
        agrirover: '#F97316',
        motorex: '#FF1E27',
        motorage: '#00F56A',
        medisync: '#8B5CF6',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
