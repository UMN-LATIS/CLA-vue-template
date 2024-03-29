/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "umn-maroon": "#7a0019",
        "umn-gold": "#ffcc33",
        "umn-gold-light": "#ffde7a",
        "umn-neutral-50": "#f9f7f6", // page background color
        "umn-neutral-100": `#f0efee`, // gray for navbar
        "umn-neutral-200": `#d5d6d2`,
        "umn-neutral-500": `#737487`,
        "umn-neutral-700": `#5a5a5a`, // text color
        "umn-neutral-800": `#262626`, // active text color
        "umn-neutral-900": `#1a1a1a`,
      },
    },
  },
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
};
