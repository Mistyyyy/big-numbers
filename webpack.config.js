const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    'lnam': './index.js',
    'lnam.min': './index.js',
  },
  mode: 'none',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    library: 'lnam',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}