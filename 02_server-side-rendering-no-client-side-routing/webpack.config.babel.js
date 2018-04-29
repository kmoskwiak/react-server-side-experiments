import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {

    mode: 'production',

  entry: {
    client: [
      'babel-polyfill',
      './app/client.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

   optimization: {
      splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },

  module: {
    rules: [
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'babel-preset-env',
                'babel-preset-react',
                'stage-2'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/,
          use: [ 'file-loader' ]
        }
      ]
  },

  plugins: [
    
  ],

  devtool: 'cheap-module-source-map'
}

export default config;