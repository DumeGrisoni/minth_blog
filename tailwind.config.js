/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        myblue: '#00b4d8',
        myblack: '#111212',
        mywhite: '#EAEDEE',
        mybluehover: '#90e0ef',
        mygrey: '#8A9292',
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        serif: ['Josefin Slab', 'serif'],
      },
    },
  },
  plugins: [],
};
