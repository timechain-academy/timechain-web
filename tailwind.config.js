const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,md,mdx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.blue,
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
darkMode: 'class',
//darkMode: ['class', '[data-mode="dark"]'],
};
