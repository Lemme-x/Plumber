/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'teal': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#155e63',
          900: '#164e63',
        },
        'primary': '#02444d',
        'primary-light': '#00aac2',
        'primary-dark': '#02444d',
        'brand': {
          'teal-dark': '#02444d',
          'teal-light': '#00aac2',
          'cyan': '#00bcd4',
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        'brand': '0 8px 20px rgba(0, 170, 194, 0.4), 0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      }
    },
  },
  plugins: [],
}