const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

const entry = {
  app: path.resolve(__dirname, 'src/index.tsx'),
};

const output = {
  path: path.resolve(__dirname, 'public'),
  filename: `[name].js`,
};

const rules = [
  {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
  {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: 'asset/inline',
  },
];

const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@': path.resolve('src'),
  },
};

const optimization = mode === 'development' ? {} : {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
};

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/static/template.html'),
    filename: 'index.html',
  }),
  new CleanWebpackPlugin(),
];

const devServer = {
  contentBase: path.resolve('public'),
  port: 2021,
  https: true,
  compress: true,
  hot: true,
  open: true,
  inline: true,
};

module.exports = {
  mode,
  entry,
  output,
  module: { rules },
  resolve,
  optimization,
  plugins,
  devServer,
};
