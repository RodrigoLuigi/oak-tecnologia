/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        'max-content': 'calc(100vh - 400px)',
      },
      fontFamily: {
        sans: 'Inter',
      },
      backgroundImage: {
        'oak-gradient': 'linear-gradient(to top, #98FFB8, #1C8894)',
      },
      gridTemplateAreas: {
        layout: [
          'brand header',
          'menu search',
          'menu content',
          'newProduct content',
        ],
        layout2: ['brand header', 'content content'],
      },
      gridTemplateColumns: {
        layout: '250px auto',
      },
      gridTemplateRows: {
        layout: '105px 128px auto 80px',
        layout2: '105px auto',
      },
      colors: {
        customGreen: '#47B368',
        customDark: '#1E2326',
        customDarker: '#20272A',
        customGray: '#596a7466',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
  ],
}
