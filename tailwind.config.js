const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        secondary: ["proxima-nova", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-blue": "#3feee6",
        "primary-dark-green": "#379683",
        "primary-green": "#3feee6",
        "primary-light-green": "#8ee4af",
        "primary-white": "#edf5e1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
