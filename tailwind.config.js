/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./revamp/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
  },
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.25rem',
        '6xl': '2.5rem',
        '7xl': '3rem',
        '8xl': '3.5rem',
        '9xl': '4rem',
        '10xl': '4.5rem',
        '11xl': '5rem',
        '12xl': '5.5rem',
        '13xl': '6rem',
        '14xl': '6.5rem',
        '15xl': '7rem',
        '16xl': '7.5rem',
      },
      colors: {
        chocolate: '#D2691E',
        sage: '#B2AC88',
        navy: '#000080',
        rose: '#FFC0CB',
        roseDeep: '#E91E63',
        red: '#FF0000',
        brown: '#964B00',
        blue: '#0000FF',
        roseGold: '#B76E79',
        burgundy: '#8B0A1A',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', ...defaultTheme.fontFamily.sans],
        imprima: ['Imprima', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        robotoCondensed: ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
        winky: ['"Winky Sans"', ...defaultTheme.fontFamily.sans],
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
        nunito: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.font-ultra-condensed': { 'font-stretch': 'ultra-condensed' },
        '.font-condensed': { 'font-stretch': 'condensed' },
        '.font-expanded': { 'font-stretch': 'expanded' },
        '.font-ultra-expanded': { 'font-stretch': 'ultra-expanded' },
      });
    }),
  ],
};
