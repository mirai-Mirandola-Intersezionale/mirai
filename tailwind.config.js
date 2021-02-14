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
        'indigo': {
          100: "#d8e3f6",
          200: "#b2c6ed",
          300: "#8baae5",
          400: "#658ddc",
          500: "#3e71d3",
          600: "#325aa9",
          700: "#25447f",
          800: "#192d54",
          900: "#0c172a"
        },
        yellow: {
          100: "#fcf8ce",
          200: "#f9f09c",
          300: "#f7e96b",
          400: "#f4e139",
          500: "#f1da08",
          600: "#c1ae06",
          700: "#918305",
          800: "#605703",
          900: "#302c02"
        },
        pink: {
          100: "#ffeeff",
          200: "#feddff",
          300: "#fecbff",
          400: "#fdbaff",
          500: "#fda9ff",
          600: "#ca87cc",
          700: "#986599",
          800: "#654466",
          900: "#332233"
        }, 
        green: {
          100: "#d8f6df",
          200: "#b2edbf",
          300: "#8be59f",
          400: "#65dc7f",
          500: "#3ed35f",
          600: "#32a94c",
          700: "#257f39",
          800: "#195426",
          900: "#0c2a13"
        },
        orange: {
          100: "#fef3d9",
          200: "#fce7b3",
          300: "#fbdc8d",
          400: "#f9d067",
          500: "#f8c441",
          600: "#c69d34",
          700: "#957627",
          800: "#634e1a",
          900: "#32270d"
        },
      },
      animation: {
        'grow': 'grow .3s ease-in-out',
      },
      keyframes: {
        'grow': {
        '0%': { transform: 'scale(0)' },
        '50%': { transform: 'scale(1.2)' },
        '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
