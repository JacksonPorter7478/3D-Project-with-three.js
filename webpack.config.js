// const path = require('path');
// const CompressionPlugin = require('compression-webpack-plugin');

// module.exports = {
//   entry: {
//     app: ['@babel/polyfill', './src/app.js'],
//   },
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     filename: 'app.bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['@babel/preset-env'],
//         },
//       },
//       // Shaders
//       {
//         test: /\.(glsl|vs|fs|vert|frag)$/,
//         exclude: /node_modules/,
//         use: ['raw-loader'],
//       },
//     ],
//   },
//   plugins: [new CompressionPlugin()],
//   devServer: {
//     contentBase: path.join(__dirname, ''),
//     compress: true,
//     watchContentBase: true,
//     port: 8080,
//     host: '0.0.0.0', //your ip address
//     disableHostCheck: true, //coment these out for prod
//   },
//   node: {
//     fs: 'empty',
//   },
// };

const path = require("path");
module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"), // Serve files from this directory
    port: 8080, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
};