/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tiny': '400px',
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1366px',
      '3xl': '1920px'
    },
    fontSize: {
      'sm': ['13px', '15px'],
      'base': ['16px', '24px'],
      'base2': ['19px', '28px'],
      'md': ['18px', '40px'],
      '2md': ['20px', '40px'],
      '3md': ['20px', '35px'],
      '4md': ['18px', '30px'],
      '5md': ['20px', '30px'],
      'lg': ['21px', '25.64px'],
      'xl': ['24px', '27px'],
      '1xl': ['30px', '45px'],
      '2xl': ['40px', '60px'],
      '3xl': ['50px', '75px'],
      '4xl': ['60px', '90px'],
      '5xl': ['55px', '82px'],
      'self-xl': ['39px', '58px'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'card': '#1f1f1f',
      'link': '#434343',
      'body': '#171717',
      'white': 'white',
      'progress': '#3A3A3A',
      'choose': '#d9e8ff',
      'choose-dark': '#162235',
      'edit': '#808080',
      'search': '#262626',
      'main': '#1F2630',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      'main': '#d3d3d3',
      'create': '#515151',
      'body': '#171717',
      'yellow': '#f8dc8e',
      'blue': '#0095C8',
    }),

    maxHeight: {
      '0': '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      '4/5': '80vh',
      'full': '100vh',
    },
    extend: {
      
      minHeight: {
        '0': '0',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        '4/5': '80vh',
        'full': '100vh',
      },
      spacing: {
        '128': '32rem',
        '320': '80rem'
      },
      colors: {
        app: {
          yellow: {
            light: '#f8dc8e',
            dark: '#916500'
          },
          cyan: {
            DEFAULT: '#0d91a9'
          },
          blue: {
            DEFAULT: '#89E1FF'
          },
          green: {
            DEFAULT: '#2EBD85',
          }
        }
      },
      lineHeight: {
        '11': '3rem',
        '12': '3.2rem',
      },
      maxWidth: {
        1920: '1920px'
      },
      borderWidth: {
        1: '1px',
      },
      padding: {
        '1px': '1px',
        '2px': '2px',
      }
    },
  },
  variants: {
    extend: {
      background: ['card', 'link', 'body', 'progress', 'search'],
      color: ['white', 'edit']
    },
  },
  plugins: [],
}
