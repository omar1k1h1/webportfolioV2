/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#FAFAFA',
        text: '#2F2A26',
        textStrong: '#211D1A',
        border: '#EAE7E4',
        accent: '#D4A373',
        'accent-soft': '#FAEDCD',
        'accent-deep': '#B37B56',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

