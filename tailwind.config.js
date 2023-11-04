/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#3D7DCA',
        secondary: '#003A70',
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

