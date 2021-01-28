const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/main/indexPage.js',
    home: './src/main/homePage.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
