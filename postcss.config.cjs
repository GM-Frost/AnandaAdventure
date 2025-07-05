module.exports = {
  plugins: [
    require("postcss-import"),
    require("@tailwindcss/postcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({
      features: { "custom-media-queries": true },
    }),
  ],
};
