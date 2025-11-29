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

        // Folder system
        'folder': {
          primary: '#F7C24E',
        },

        // Priority system
        'priority': {
          critical: '#bb3e03',
          high: '#ca6702',
          medium: '#ee9b00',
          low: '#94d2bd',
        },

        // Status system
        'status': {
          untested: '#3ac6e1',
          passed: '#6ea56c',
          failed: '#f15f47',
          retest: '#fba91e',
          skipped: '#805aab',
        },

        // Charts
        'chart': {
          categorical: {
            1: '#fba91e',
            2: '#6ea56c',
            3: '#3ac6e1',
            4: '#feda2f',
            5: '#f15f47',
            6: '#244470',
            7: '#9c80bb',
            8: '#f595a6',
          },
        },

        // Features
        'feature': {
          highlight: '#52e280',
        },

        // Avatars
        'avatar': {
          gradient: {
            1: '#0A0310',
            2: '#49007E',
            3: '#FF005B',
            4: '#FF7D10',
            5: '#FFB238',
          },
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
