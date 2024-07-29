/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

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
        subTitle: '#818181',
        vetBg: '#F6F7FA',
      },
      backgroundImage: {
        Dog: "url('/src/assets/Dog.jpg')",
      },
    },
  },
  plugins: [daisyui],
};

