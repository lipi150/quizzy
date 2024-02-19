/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor:{
          "bgc1": "#485953",
          "bgc2":"#EDFF87",
          "bgc3":"#7C8884",
          "bgc4":'#4C5554',
          "bgc5":"#404A49",
          "bgc6":"#414141",
      },
      strokeWidth:{
        'strokew':'10rem',
      },
      textColor:{
        'c2':'#EDFF87',
      }
    },
  },
  plugins: [],
}

