/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,html}'],
  safelist: [
    {
      pattern: /(from|to)-(blue|indigo|rose|fuchsia|lime|emerald)-(400|500)/,
    },
  ],
};
