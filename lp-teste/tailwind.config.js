/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,css}"];
export const theme = {
  screens: {
    'sm': '420px',
    'ssm': '300px'
  },
  extend: {
    backgroundImage: theme => ({
      'home-mobile': "url('/src/assets/mobile.svg')",
      'home-desktop': "url('/src/assets/desktop.svg')",
      'dayNight-mobile': "url('/src/assets/dia-noite-mobile.png')",
    }),
    fontFamily: {
      kanit: ['Kanit', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
  },
};

export const plugins = [
  require('@tailwindcss/typography'),
];

