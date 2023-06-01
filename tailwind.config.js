/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        darkslategray: 'hsl(234, 29%, 20%)',
        charcoalgray: 'hsl(235, 18%, 26%)',
        regulargray: 'hsl(231, 7%, 60%)',
      },
      backgroundImage: {
        'large-bg': "url('/illustration-sign-up-desktop.svg')",
        'small-bg': "url('/illustration-sign-up-mobile.svg')",
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
