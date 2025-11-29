/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // required so Tailwind sees all your components
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px', // custom for 27–32 inch displays
        '4k': '2560px', // optional — for ultra-wide/4K monitors
      },
    },
    extend: {
      screens: {
        '3xl': '1920px',
        '4k': '2560px',
      },
      maxWidth: {
        '8xl': '90rem', // 1440px
        '9xl': '120rem', // 1920px
      },
    },
  },
  plugins: [],
};
