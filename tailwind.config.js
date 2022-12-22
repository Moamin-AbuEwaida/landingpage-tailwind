/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      primary: 'Open Sans',
      secondary: 'Lato',
    },
    container:{
      padding:{
        DEFAULT: '1rem',
        lg: '0'
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px'
    },
    extend: {
      colors:{
        primary: '#212353',
        secondary: '#485d68',
        accent: {
          primary: '#9c69e2',
          primary_hover: '#9059db',
          secondary: '#f063b8',
          secondary_hover: '#e350a9',
          tertiary: '#68c9ba',
        },
      },
    },
  },
  plugins: [],
}
