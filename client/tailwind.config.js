/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
        'title-1' : ['Bakbak One', 'cursive'],
        'content' : ['Hind', 'sans-serif'],
        'display' : ['Bakbak One', 'cursive'],
      },
    },
    colors:{
      'highlight':'#ff8e3c',
      'stroke':'#0d0d0d',
      'tertiary':'#d9376e',
      'white_main':'#eff0f3',
      'secondary':'#fffffe',
    },
  },
  plugins: [],
}