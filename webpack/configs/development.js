const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../utils/paths');

module.exports = env => ({
  devtool: 'cheap-eval-source-map',
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './pages/index.html',
      filename: 'index.html',
      chunks: ['homepage']
    }),
    new HtmlWebpackPlugin({
      template: './pages/registration.html',
      filename: 'registration.html',
      chunks: ['registration']
    }),
    new HtmlWebpackPlugin({
      template: './pages/login.html',
      filename: 'login.html',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      template: './pages/my-orders.html',
      filename: 'my-orders.html',
      chunks: ['orders']
    })
  ],
  devServer: {
    contentBase: paths.BUILD_DIR,
    publicPath: '',
    historyApiFallback: true,
    compress: true,
    port: 4040,
    noInfo: true,
    quiet: true,
    clientLogLevel: 'warning',
    stats: 'errors-only',
    open: true,
  },
});
