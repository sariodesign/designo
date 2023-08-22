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
        'cta-web-design': "url('/desktop/image-web-design.jpg')",
        'cta-app-design': "url('/desktop/image-app-design.jpg')",
        'cta-graphic-design': "url('/desktop/image-graphic-design.jpg')",
        'info-pattern': "url('/bg-pattern-design-pages-intro-mobile.svg')",
        'cta-pattern': "url('/bg-pattern-call-to-action.svg')",
        'two-circles': "url('/bg-pattern-two-circles.svg')",
        'three-circles': "url('/bg-pattern-three-circles.svg')"
      },
      colors: {
        'white': '#FFFFFF',
        'black': '#1D1C1E',
        'dark-grey': '#333136',
        'light-grey': '#F1F3F5',
        'peach': '#E7816B',
        'light-peach': '#FFAD9B',
        'very-light-peach': '#FDF3F0',
        'border-footer-color': 'rgba(151,151,151,0.1)',
        'gradient-info': 'rgba(93,2,2,.1)'
      },
    },
  },
  plugins: [],
}
