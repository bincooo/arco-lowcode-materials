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
        categories: ['基础', '通用', '数据输入', '数据显示', '布局'],
        builtinAssets: [
          {
            packages: [
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
            ],
          }
        ]
      },
    ],
  ],
};
