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
        'oak-gradient2': 'linear-gradient(36deg, #47B368 0%, #1C8894 100%);',
      },
      gridTemplateAreas: {
        layout: [
          'brand header',
          'menu search',
          'menu content',
          'newProduct content',
        ],
      },
      gridTemplateColumns: {
        layout: '250px auto',
      },
      gridTemplateRows: {
        layout: '105px 128px auto 80px',
      },
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwind-scrollbar'),
  ],
}
