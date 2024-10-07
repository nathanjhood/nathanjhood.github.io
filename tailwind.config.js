const defaultColors = require('tailwindcss/colors');
const nativewind = require('nativewind/tailwind/css');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.{js,html}'],
  plugins: [nativewind],
  // presets: [], // dont use this as it overwrites the defaults
  safelist: [
    // {
    //   pattern: /.*/,
    // },
    // {
    //   pattern: /.color-*/,
    // },
    // {
    //   pattern: /.bg-*/,
    // },
    // {
    //   pattern: /.container*/,
    // },
    // {
    //   pattern: /.text-*/,
    // },
    // {
    //   pattern: /.font-*/,
    // },
    // {
    //   pattern: /.opacity-*/,
    // },
    // {
    //   pattern: /.w-*/,
    // },
    // {
    //   pattern: /.h-*/,
    // },
    // {
    //   pattern: /.display-*/,
    // },
    // {
    //   pattern: /.flex-*/,
    // },
  ],
  // Nativewind requires 'class' https://www.nativewind.dev/v4/core-concepts/dark-mode
  darkMode: 'class', // 'media' or 'class'
  theme: {
    colors: defaultColors,
    extend: {},
  },
  corePlugins: {
    preflight: true,
    // Nativewind disables these by default:
    // https://www.nativewind.dev/v4/core-concepts/differences#color-opacity
    textOpacity: true,
    borderOpacity: true,
    divideOpacity: true,
    backgroundOpacity: true,
  },
};
