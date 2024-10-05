import type Tailwind = require('tailwindcss');
const colors: typeof import('tailwindcss/colors') = require('tailwindcss/colors')
const nativewind: typeof import("nativewind/tailwind/css") = require("nativewind/tailwind/css");


const config: Tailwind.Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    theme: {
      colors: colors,
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    extend: {},
  },
  plugins: [nativewind],
} satisfies Tailwind.Config

export = config;
