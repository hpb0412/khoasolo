/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mylight: {
          'color-scheme': 'light',
          primary: '#65c3c8',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#291334',
          'base-100': '#faf7f5',
          'base-200': '#efeae6',
          'base-300': '#e7e2df',
          'base-content': '#291334',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem',
        },
        mydark: {
          'color-scheme': 'dark',
          primary: '#38bdf8',
          secondary: '#818CF8',
          accent: '#F471B5',
          neutral: '#1E293B',
          'neutral-focus': '#273449',
          'base-100': '#0F172A',
          info: '#0CA5E9',
          success: '#2DD4BF',
          warning: '#F4BF50',
          error: '#FB7085',
        },
      },
    ],
  },
}
