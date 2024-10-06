const defaultColors = require('tailwindcss/colors');
const nativewind = require('nativewind/tailwind/css');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.{js,html}'],
  plugins: [nativewind],
  // presets: [], // dont use this as it overwrites the defaults
  darkMode: 'media', // or 'class'
  theme: {
    colors: defaultColors,
    extend: {},
  },
};
