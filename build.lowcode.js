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
        engineScope: "@alilc",
        categories: ['基础', '通用', '数据显示', '布局'],
        builtinAssets: [
        ]
      },
    ],
  ],
};
