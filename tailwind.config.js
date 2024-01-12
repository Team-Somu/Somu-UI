/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary1: '#008253',
      primary2: '#07A462',
      primary3: '#3CC676',
      primary4: '#5BD183',
      primary5: '#7BDD96',
      primary6: '#8FE4A2',
      primary7: '#B3F0C1',
      primary8: '#CFF3D5',
      primary9: '#EBFAEF',
      primary10: '#FAFFFB',
      gray1: '#000000',
      gray2: '#222529',
      gray3: '#353A3F',
      gray4: '#4A5056',
      gray5: '#5E656E',
      gray6: '#6E757C',
      gray7: '#8C939A',
      gray8: '#ACB3BA',
      gray9: '#CFD4D9',
      gray10: '#DEE2E6',
      gray11: '#F1F3F6',
      gray12: '#F6F8FB',
      gray13: '#FFFFFF',
      red1: '#B90000',
      red2: '#D71308',
      red3: '#FA362B',
      red4: '#FF6256',
      red5: '#FF9B8F',
      red6: '#FFC3BB',
      red7: '#FFD8D2',
      red8: '#FFF1EF',
      yellow1: '#F2AE00',
      yellow2: '#FFCC00',
      yellow3: '#FFD633',
      yellow4: '#FFE066',
      yellow5: '#FFF0B3',
      yellow6: '#FFF7D9',
      teal1: '#0F88C8',
      teal2: '#28AEED',
      teal3: '#29D1FF',
      teal4: '#7FE3FF',
      teal5: '#A9EDFF',
      teal6: '#E4F9FF',
      blue1: '#003EC3',
      blue2: '#005CE1',
      blue3: '#007AFF',
      blue4: '#3395FF',
      blue5: '#66AFFF',
      blue6: '#B3D7FF',
      blue7: '#CEE5FF',
      blue8: '#E5F2FF',
      purple1: '#6B3CC9',
      purple2: '#8556E3',
      purple3: '#A17DF5',
      purple4: '#BD9FF5',
      purple5: '#D4C4F5',
      purple6: '#F5EBFF',
      pink1: '#EA2069',
      pink2: '#FF2F7A',
      pink3: '#FF608F',
      pink4: '#FF9BB8',
      pink5: '#FFD1DF',
      pink6: '#FFEDF2',
    },
    extend: {
      padding: {
        '1c': '6px',
        '2c': '8px',
        '3c': '10px',
        '4c': '12px',
        '5c': '14px',
        '6c': '16px',
        '7c': '18px',
        '8c': '20px',
        '9c': '22px',
        '10c': '24px',
      },
      margin: {
        '1c': '6px',
        '2c': '8px',
        '3c': '10px',
        '4c': '12px',
        '5c': '14px',
        '6c': '16px',
        '7c': '18px',
        '8c': '20px',
        '9c': '22px',
        '10c': '24px',
      },
      // spacing: {
      //   '1c': '6px',
      //   '2c': '8px',
      //   '3c': '10px',
      //   '4c': '12px',
      //   '5c': '14px',
      //   '6c': '16px',
      //   '7c': '18px',
      //   '8c': '20px',
      //   '9c': '22px',
      //   '10c': '24px',
      // },
      keyframes: {
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'fade-out': {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        'collapsed-down': {
          '0%': { maxHeight: 0 },
          '100%': { maxHeight: 'var(--content-height)' },
        },
        'collapsed-up': {
          '0%': { maxHeight: 'var(--content-height)' },
          '100%': { maxHeight: 0 },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out forwards',
        'fade-out': 'fade-out 0.3s ease-out forwards',
        'collapsed-down': 'collapsed-down 0.3s ease-out forwards',
        'collapsed-up': 'collapsed-up 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};