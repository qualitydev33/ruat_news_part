module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xxs: '380px'
      },

      colors: {
        c_1564C0: '#1564C0',
        c_2A7BD9: '#2A7BD9',
        c_7EAFE8: '#7EAFE8',
        c_F8F9FB: '#F8F9FB',
        c_E8EBF1: '#E8EBF1',
        c_BCC3CF: '#BCC3CF',
        c_E5BE3D: '#E5BE3D',
        c_A6A6A6: '#A6A6A6',
        c_C85151: '#C85151',
        c_6E7582: '#6E7582',
        c_d6d6d6: '#d6d6d6',
        c_64A879: '#64A879',
        c_50BC2E: '#50BC2E',
        c_E4BE64: '#E4BE64',
        c_BCCF4A: '#BCCF4A',
        c_F2F2F2: '#F2F2F2',
        c_C8C8C8: '#C8C8C8',
        c_EBE188: '#EBE188',
        c_F17A13: '#F17A13',
        c_AADFBA: '#AADFBA',
        c_E69898: '#E69898',


        blue_grey: '#607D8B',
        blue_grey_lighten_5: '#ECEFF1',
        blue_grey_lighten_4: '#CFD8DC',
        blue_grey_lighten_3: '#B0BEC5',
        blue_grey_lighten_2: '#90A4AE',
        blue_grey_lighten_1: '#78909C',
        blue_grey_darken_1: '#546E7A',
        blue_grey_darken_2: '#455A64',
        blue_grey_darken_3: '#37474F',
        blue_grey_darken_4: '#263238',


        dark_040739: '#040739',
        dark_021a4f: '#021a4f',
        dark_0fc9f2: '#0fc9f2',
        dark_E91E63: '#E91E63',
        dark_FFEB3B: '#FFEB3B',

        
      },

      boxShadow: {
        'card': '0px 1px 3px #d6d6d6',
        'dark_card': '0px 0px 10px 0px #0fc9f2'
      },
      fontSize: {
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px',
        '11px': '11px',
        '17px': '17px',
        '22px': '22px',
        '28px': '28px',
        '64px': '64px',
        '120px': '120px',
        '200px': '200px'
      },
      
      lineHeight: {
        '17_14': '0.8235',
        '14_18': '1.2857',
        '18_22': '1.2222',
        '14_16': '1.1428'
      },

      margin: {
        '2_5': '10px',
        '4_5': '18px',
        '5_5': '22px',
        '7_5': '30px',
        '9_5': '38px',
        '10_5': '42px',
        '12_5': '50px',
        '14_5': '58px',
        '15': '60px',
        '17_5': '70px',
        '18': '72px',
        '22_5': '90px',
        '25': '100px',
        '30': '120px',
        '31': '124px',
        '44': '132px',
        '172': '172px',
        '86': '344px'
      },
      padding: {
        '4_5': '18px',
        '7_5': '30px',
        '10_5': '42px',
        '12_5': '50px',
        '13': '52px',
        '15': '60px',
        '17_5': '70px',
        '22_5': '90px',
        '25': '100px',
        '43': '172px',
        '75': '300px'
      },
      height: {
        '2_5': '10px',
        '3_5': '14px',
        '4_5': '18px',
        '5_5': '22px',
        '6_5': '26px',
        '7_5': '30px',
        '9_5': '38px',
        '11_5': '46px',
        '12_5': '50px',
        '14_5': '58px',
        '15': '60px',
        '71px': '71px',
        '76px': '76px',
        '22_5': '90px',
        '25': '100px',
        '30': '120px',
        '30_5': '122px',
        '32': '128px',
        '33': '132px',
        '543px': '543px',
      },
      width: {
        '2_5': '10px',
        '3_5': '14px',
        '4_5': '18px',
        '6_5': '26px',
        '7_5': '30px',
        '11_5': '46px',
        '12_5': '50px',
        '14_5': '58px',
        '15': '60px',
        '18': '72px',
        '22_5': '90px',
        '25': '100px',
        '27': '108px',
        '30': '120px',
        '31_5': '136px',
        '42_5': '170px',
        '45': '180px',
        '50': '200px',
        '66': '264px',
        '75': '300px',
        '81': '324px',
        '90': '360px',
        '100': '400px',
        '106_5': '426px',
        '125': '500px',
        '131_5': '526px',
        '144': '576px',
        '160': '560px',
        '146': '584px',
        '154_5': '618px',
        '162_5': '650px',
        '150vw': '150vw'
      },
      minWidth: {
        '136px': '136px'
      },
      maxWidth: {
        '112px': '112px',
        '170px': '170px',
        '346px': '346px',
        '430px': '430px'
      },
      maxHeight: {
        '500px': '500px',
        '543px': '543px'
      },
      strokeWidth: {
        '0.5': '0.5',
        '1.5': '1.5',
      }

    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
      animation: ['motion-safe', 'motion-reduce']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
