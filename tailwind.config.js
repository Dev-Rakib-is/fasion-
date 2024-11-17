/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      headerContainer:{
        firstContainer:'1280px'
      },
      fontFamily:{
       pop:['Poppins'],
       pod:['Podkova']
      },
      bacgroundColor:{
        headerBg:'#FAE3B6'

      },
    },
  },
  plugins: [],
}

