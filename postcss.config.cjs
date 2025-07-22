// postcss.config.cjs
module.exports = {
  plugins: [
    require('postcss-import'), // 1) inline your @imports
    require('postcss-preset-env')({
      stage: 2,
      features: { 'custom-media-queries': true },
    }),
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};
