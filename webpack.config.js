const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  const isDev = env.development;
  const isProd = env.production;

  const getStyleLoaders = () => [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
  ];

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: 'Felix v2',
        template: 'src/index.html',
      }),
    ];
    if (isProd) {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: 'style-[fullhash:8].css',
        }),
      );
    }
    return plugins;
  };

  return {
    entry: {
      main: path.resolve(__dirname, 'src/index.jsx'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: isProd ? '[name]-[fullhash:8].bundle.js' : '[name].bundle.js',
    },

    mode: isDev ? 'development' : isProd && 'production',

    devServer: {
      open: true,
      // publicPath: "./",
      historyApiFallback: true,
    },

    module: {
      rules: [
        // JS
        {
          test: /\.(js|.jsx)/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        // CSS
        {
          test: /\.css$/,
          use: getStyleLoaders(),
        },
        // SCSS
        {
          test: /\.s[ca]ss$/,
          use: [...getStyleLoaders(), 'sass-loader'],
        },
        // IMAGES
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:fullhash:7].[ext]',
              },
            },
          ],
        },
        // FONTS
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    plugins: [...getPlugins(), new CleanWebpackPlugin()],

    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};
