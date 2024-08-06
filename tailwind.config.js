/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sidenav': '#F0F0F0',
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(90deg, #F764B6 0%, #BB96FD 100%)',
      },
    },
  },
  plugins: [],
}

