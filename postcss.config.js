// const tailwindcss = require('tailwindcss');
// const nativewind = require('nativewind/postcss');
// const autoprefixer = require('autoprefixer');

module.exports = {
  // plugins: [
  //   require('tailwindcss'),
  //   require('autoprefixer'),
  //   require('nativewind/postcss'),
  // ],
  plugins: {
    tailwindcss: {
      config: 'tailwind.config.js',
    },
    autoprefixer: {},
    'nativewind/postcss': {
      output: 'src/assets/js/nativewind.js',
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
