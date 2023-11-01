/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  mode: 'jit',
  content: [],
  theme: {
    extend: {
      colors: {
        color_blue_light: '#3D7DCA',
        color_blue_dark: '#003A70',
      },
    },
  },
  plugins: [

  ],
}

