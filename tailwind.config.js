module.exports = {
  purge: false,
  darkMode: 'media', // or 'media' or 'class' or false
  theme: {
    fontFamily: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Poppins', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors:{
        red:{
          400:'#F7514E',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
