/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: {
      DEFAULT: '15px'
    },
    fontSize: {
      'title-sm': ['48px', '48px'],
      'title-base': ['32px', '36px'],
      'subtitle': ['16px','26px']
    },
    screens: {
      'sm': '768px',
      'md': '1024px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/bg-pattern-hero-home.svg')",
        'cta-web-design': "url('/image-app-design.jpg')",
        'cta-app-design': "url('/image-web-design.jpg')",
        'cta-graphic-design': "url('/image-graphic-design.jpg')",
        'info-pattern': "url('/bg-pattern-design-pages-intro-mobile.svg')"
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#1D1C1E',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
        'peach': '#E7816B',
        'light-peach': '#FFAD9B',
        'gradient-info': 'rgba(93,2,2,.1)'
      },
    },
  },
  plugins: [],
}
