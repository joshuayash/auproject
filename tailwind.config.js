/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stone: {
          50: '#FAF7F2',
          100: '#F5EFE7',
          200: '#E8D5BC',
          300: '#D4B896',
          400: '#C4956A',
          500: '#B07A50',
          600: '#8D5E35',
          700: '#6B4426',
          800: '#4A2E18',
          900: '#2A1A0D',
        },
        charcoal: {
          50: '#F4F5F6',
          100: '#E8EAEC',
          200: '#C7CDD2',
          300: '#A5AEB7',
          400: '#627282',
          500: '#3E5060',
          600: '#2C3E50',
          700: '#1E2D3D',
          800: '#141F2B',
          900: '#0A1018',
        },
        forest: {
          50: '#F0F5EE',
          100: '#D9EBD4',
          200: '#B3D7AA',
          300: '#7DB87A',
          400: '#4A7C59',
          500: '#2D5A27',
          600: '#234520',
          700: '#1A3318',
          800: '#112210',
          900: '#081108',
        },
        ochre: {
          50: '#FDF8F0',
          100: '#FAF0DC',
          200: '#F2D99A',
          300: '#E8BE57',
          400: '#D4A028',
          500: '#B8821A',
          600: '#8F6013',
          700: '#6B450E',
          800: '#472E09',
          900: '#231704',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
