/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '12px',
      md: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
    },
    colors: {
      black: '#000',
      yellow: '#FAC744',
      white: '#ffffff',
      blue: {
        header: '#0E1648',
        card: '#0E1648',
        body: '#020733',
        btn: '#3333FF',
      },
      grey: {
        100: '#FBFBFB',
        300: '#CCCCCC',
        400: '#808080',
        500: '#4C4C4C',
        700: '#6A6B6D',
        800: '#ABABAB',
      },
      cancel: '#C25E5E',
    },
    breakpoints: {
      '2xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
};
