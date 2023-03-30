/** @type {import('tailwindcss').Config} */
module.exports = {
  ccontent: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#9d0ece',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/Vectornew.png')",
      },
    },
  },
  plugins: [],
}

