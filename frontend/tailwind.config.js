const { heroui } = require('@heroui/react');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: colors.blue[600],
              foreground: '#FFFFFF',
            },
            focus: colors.blue[600],
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: colors.blue[600],
              foreground: '#FFFFFF',
            },
            focus: colors.blue[600],
          },
        },
      },
    }),
  ],
};
