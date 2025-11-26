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
    extend: {
      colors: {
        // App backgrounds
        'app-bg': {
          primary: '#030712',    // gray-950 - main background
          secondary: '#111827',  // gray-900 - cards, secondary surfaces
          tertiary: '#1f2937',   // gray-800 - tertiary surfaces, hover states
        },

        // App borders
        'app-border': {
          primary: '#1f2937',    // gray-800 - main dividers
          secondary: '#374151',  // gray-700 - secondary dividers
        },

        // App text
        'app-text': {
          primary: '#e5e7eb',    // gray-200 - headings, main content
          secondary: '#9ca3af',  // gray-400 - supporting text, labels
          tertiary: '#6b7280',   // gray-500 - hints, metadata
          muted: '#4b5563',      // gray-600 - very subtle text
        },
      },
    },
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
