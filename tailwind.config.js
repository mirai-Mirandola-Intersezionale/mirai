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
        red: {
          100: "#fddcdc",
          200: "#fcb9b8",
          300: "#fa9795",
          400: "#f97471",
          500: "#f7514e",
          600: "#c6413e",
          700: "#94312f",
          800: "#63201f",
          900: "#311010"
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
