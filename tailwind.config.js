const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
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
darkMode: "class",
};
