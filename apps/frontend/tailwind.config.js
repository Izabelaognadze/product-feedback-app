const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors:{
        clr: {
          purple: { 
            'purple' : '#AD1FEA', 
            'purple-hover' : '#C75AF6',
          },
          blue: {
            'light-blue-#62BCFA' : '#62BCFA',
            'dark-blue-#4661E6' : '#4661E6',
            'dark-blue-hover-#7C91F9' : '#7C91F9',
          }, 
          white: {
            'dark-#F2F4FF' : '#F2F4FF',
            'light-#F7F8FD' : '#F7F8FD',
          },
          darkBlue: {
            'button-#3A4374' : '#3A4374',
            'button-hover-#3A4374' : '#656EA3',
            'superDarkBlue-#373F68' : '#373F68',
            'lightDarkBlue-#647196' : '#647196',
          },
          orange: {
            'clr-orange-#F49F85': '#F49F85',
            'red': '#D73737',
            'red-hover' : '#E98888'
          },
        },
      }, 
      fontFamily:{
        MainFont: 'Jost'
      },
      padding:{
        'defaultPadding': '24px',
      }
    },
  },
  plugins: [],
};
