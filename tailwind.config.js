/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  darkMode: "class",
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        'white-light': '#e9edf8',
        'black-light': '#111827',
        'black': '#333',
        'white': '#fff'
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [

  ],
}

