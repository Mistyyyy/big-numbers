const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'big-integers': './index.js',
    'big-integers.min': './index.js',
  },
  mode: 'none',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    library: 'big-integers',
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