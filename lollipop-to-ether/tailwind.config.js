module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purpleC: '#6e3fa3',
        greenC: '#00c65e',
        yellowC: '#bba600',
        redC: '#f93822',
      },
      backgroundImage: {
        hel: 'radial-gradient( circle farthest-corner at 10% 20%, rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% )',
      },
      spacing: {
        '21': '5.25rem',
      }
    },
  },
  plugins: [],
};
