
module.exports = {
  purge:['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/**/*.html',
  './src/**/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        'xs': '475px'
      },
      colors:{
        almostBlack: '#0D0012',
        darkPurple: '#330047',
        lightPurple: '#280038'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       }
    },
   
    
  },
  variants: {
    extend: {
      backgroundImage: ['hover']
    },
  },
  plugins: [],
}
