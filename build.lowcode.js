const { library } = require('./build.json');
module.exports = {
  sourceMap: false,
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        noParse: true,
        engineScope: "@alilc"
      },
    ],
  ],
};
