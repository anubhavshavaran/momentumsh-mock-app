/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#363636',
        'light-gray': '#595858',
        'gray-b7': '#B7B7B7',
        'gray-64': '#646464',
        'gray-d9': '#D9D9D9',
        'blue': '#009FF9',
        'light-orange': '#FFAD62',
        'orange': '#F27400'
      },
      gridTemplateColumns: {
        'home': '60px minmax(900px, 1fr) 500px'
      },
      gridTemplateRows: {
        'home': '50px minmax(0, 1fr) 50px'
      }
    },
  },
  plugins: [],
}

