/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors:{
      'blue':{
        400: '#26BB14',
        500:'#013D51',
        700:'#A80909',
        DEFAULT: '#335EFF'
      }
    },
    screens: {
      'sm': '300px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '2040px',
    },
    extend: {},
  },
  plugins: [],
}

//inline: classes datos dentro de class
//directivas: @tailwind @layer @apply
//utility classes: hover, md, sm, etc
//configuracion extra como ejemplo blue