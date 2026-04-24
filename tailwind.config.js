/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        site: '1280px',
        'site-wide': '1600px',
      },
      fontFamily: {
        sans: ['Titillium Web', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
