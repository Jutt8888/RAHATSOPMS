/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F6FCF6',
        primary: '#214B34',
        primaryDark: '#173123',
        secondary: '#3F7D58',
        gold: '#C89B3C',
        brown: '#8B6A45',
        cream: '#FFFDF7',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(20,40,20,0.18)',
        card: '0 10px 30px rgba(20,40,20,0.08)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(4deg)' },
        },
        pulseLine: {
          '0%': { strokeDashoffset: 240 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        float: 'floatY 5s ease-in-out infinite',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        pulseLine: 'pulseLine 2.4s linear infinite',
      },
    },
  },
  plugins: [],
}
