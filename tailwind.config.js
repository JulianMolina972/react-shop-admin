/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/pages/**/*.{html,jsx,js}'],
  theme: {
    colors: {
      ...colors,
    },
  },
};
