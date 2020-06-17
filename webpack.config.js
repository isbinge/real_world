const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const APP_SOURCE_PATH = path.resolve(process.cwd(), 'src/index.tsx');
const APP_DIST_PATH = path.resolve(process.cwd(), 'dist');

const plugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'React',
    filename: 'index.html',
    template: 'src/template.ejs',
  }),
];
console.log(process.env.OPEN_ANALYZER);
if (process.env.OPEN_ANALYZER === 'true') {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: {
    main: APP_SOURCE_PATH,
  },
  output: {
    path: APP_DIST_PATH,
    filename: '[name].[contenthash].js',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.ejs'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [{ test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' }],
  },
  devServer: {
    contentBase: APP_DIST_PATH,
    port: process.env.npm_package_config_port,
    hot: true,
    open: true,
  },
  plugins,
};
