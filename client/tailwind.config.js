const { join } = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
