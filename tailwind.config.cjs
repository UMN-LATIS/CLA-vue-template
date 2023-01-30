/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-nested-import')
  ],
  corePlugins: {
    // disabling preflight so that we can adopt tailwind's classes
    // on a case-by-case basis with the `tw-preflight`
    preflight: false,
  },
};
