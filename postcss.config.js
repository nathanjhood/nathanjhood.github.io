module.exports = {
  plugins: {
    tailwindcss: {
      config: 'tailwind.config.js',
    },
    autoprefixer: {},
    'nativewind/postcss': {
      output: 'node_modules/.cache/nativewind',
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
