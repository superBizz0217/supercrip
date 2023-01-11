module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Helvetic',
        "heading": "Awakenning",
        "acier": "AcierBat",
        'myriad': "myriad-pro",
        'typewriter': 'Typewriter'
      },
      fontSize: {
        base: '0.95rem',
        xl: '1.45rem',
        '2xl': '1.785rem',
        '5xl': '2.85rem',
        '6xl': '4.35rem'
      },
      colors: {
        'dark': "#16151a",
        'red': "#ab1000",
        'primary-400': '#01f4fd',
        'primary': "#7bdcfc",
        'primary-500': "#71c1f9",
        'primary-dark': "#0553f2",
        'secondary': '#ece403',
        'secondary-light': '#eefc7b',
        'pink': {
          500: '#9101d4'
        }
      },
      maxWidth: {
        'xxl': '1450px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}