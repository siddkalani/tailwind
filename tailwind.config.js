/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        boldo:['2.7rem',{
          lineHeight:'2.1rem'
        }],
        gap: {
          'nav': '2.5rem',
        },
        fontFamily:{
          man:['Manrope'],
          open:['Open Sans']
        }
      }
    },
  },
  plugins: [],
}