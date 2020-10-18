module.exports = {
  purge: false,
  theme: {
    screens: {
      xs: '320px',
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px'
    },
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    fontSize: {
      xsm: '.50rem',
      xm: '.65rem',
      xs: '.75rem',
      sm: '.80rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      xxl: '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    extend: {
      colors: {
        primary: '#ffffff',
        gridcolor: '#15365a',
        primarybuttoncolor: '#47dd84',
        headingtext: '#122667',
        secondarybuttoncolor: '#1877F2',
        darkblue: '#456EFE',
        darkbrown:'#654321',
        darkmoderateorange :'#9f6934',
        lightblue:'#add8e6'
      },
      // fontFamily: {
      //   roboto: ['Roboto'],
      //   workSans: ['Work Sans'],
      //   sourceSansPro: ['Source Sans Pro']
      // },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '3/10': '30%'
      },
      borderWidth: {
        default: '1px',
        '1/2': '0.5px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px'
      },

    }
  },
  variants: {
    visibility: ['responsive', 'hover']
  },
  plugins: []
}