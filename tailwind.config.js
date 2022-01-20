module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'my-red':'#ED1C24',
        'my-blue':'#36499F',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
