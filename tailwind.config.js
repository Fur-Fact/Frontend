/** @type {import('tailwindcss').Config} */


export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretend'],
        logo: ['KOHIBaeumOTF'],
      },
      colors: {
        primary: '#40A5FD',
        vetBg: '#F6F7FA',
      },
    },
  },
  plugins: [],
};
