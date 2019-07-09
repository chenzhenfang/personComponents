module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 1920,
      selectorBlackList: ['.ignore'],
      propertyBlackList: [],
      viewportUnit: 'vw',
    }
  }
};