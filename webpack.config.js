const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'public/'),
    devMiddleware: {
      publicPath: '/dist/'
    },
    port: 3000,
    hot: 'only'
  }
};
