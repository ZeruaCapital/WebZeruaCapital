/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E4C',
        'primary-dark': '#142239',
        secondary: '#3B5998',
        accent: '#E6B54F',
        'gray-light': '#F5F7FA',
        'gray-medium': '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-aptos)'],
        serif: ['var(--font-playfair)'],
        heading: ['var(--font-aptos)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
} 