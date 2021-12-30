const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './nft/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // If you're using TailwindUI, overwrite the default indigo color here.
        indigo: colors.cyan
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
