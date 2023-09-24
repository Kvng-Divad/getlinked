import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'mons': ['Montserrat', 'sans-serif ' ],
      'clash': ['Clash Display', 'sans-serif'] ,
      'unica': ['Unica One', 'cursive']                                     
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: 'linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)',
          100: '#150E28',
          200: '#903AFF',
          300: '#D434FE',
          400: '#FF26B9;',
        },
        success: {
          DEFAULT: '#298750',
          100: '#47A2671A',
          200: '#47A26740',
          300: '#47A26759',
          400: '#47A26780',
          500: '#47A267A6',
          600: '#47A267BF',
          700: '#47A267',
        },
        error: {
          DEFAULT: '#BA1A1A',
          100: '#DE37301A',
          200: '#DE373040',
          300: '#DE373059',
          400: '#DE373080',
          500: '#DE3730A6',
          600: '#DE3730BF',
          700: '#DE3730',
        },
        progress: {
          DEFAULT: '#E99028',
          100: '#FFBF751A',
          200: '#FFBF7540',
          300: '#FFBF7559',
          400: '#FFBF7580',
          500: '#FFBF75A6',
          600: '#FFBF75BF',
          700: '#FFBF75',
        },
        gray: {
          DEFAULT: '#fff',
          100: '#F2F2F2',
          200: '#E6E6E6',
          300: '#DDDDDD',
          400: '#CACACA',
          500: '#ACACAC',
          600: '#818181',
          700: '#484848',
          800: '#519259',
          900: '#064635',
        },
      },
      fontSize: {
        hero: '64px',
        h1: '80px',
        h2: '72px',
        h3: '48px',
        h4: '36px',
        h5: '32px',
        h6: '28px',
        h7: '24px',
        p1: '20px',
        p2: '18px',
        p3: '16px',
        p4: '15px',
        p5: '14px',
        p6: '13px',
        p7: '10px',
      },
    },
  },
  plugins: [],
}
export default config
