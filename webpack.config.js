const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'big-numbers': './index.js',
    'big-numbers.min': './index.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    library: 'bigNumbers',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      })
    ]
  }
}