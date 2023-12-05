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
        'clr-purple-#AD1FEA' : '#AD1FEA',
        'clr-blue-#4661E6' : '#4661E6',
        'clr-MidnightBlue-#373F68': '#373F68',
        'clr-grey-#F2F4FF': '#F2F4FF',
        'clr-Whispering-white-#F7F8FD': '#F7F8FD',
        'clr-RoyalNavy-#3A4374': '#3A4374',
        'clr-Horizon-Mist-#647196': '#647196',
        'clr-orange-#F49F85': '#F49F85',
        'clr-ligth-blue-#62BCFA': '#62BCFA',
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
