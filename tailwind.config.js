/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage: theme => ({
        'gradient-linear': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(ellipse at center, rgba(238,238,238,1) 0%, rgba(255,255,255,1) 100%)'
      }),
      colors: {
        'soft-pink': '#FFB6C1',
        'soft-white': '#FFFAF0',
      },
    },
  },
  plugins: [],
}

