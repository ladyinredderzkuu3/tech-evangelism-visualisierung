const path = require('path');

module.exports = {
  // Entry point of the application
  entry: './src/main.js',
  output: {
    // Output directory for bundled files
    path: path.resolve(__dirname, 'dist'),
    // Filename for the bundled output
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Apply Babel loader to JavaScript files
        test: /\.js$/, // Fixed regex to correctly identify JavaScript files
        // Exclude node_modules directory
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            // Use Babel presets for environment and React
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  devServer: {
    // Serve content from the dist directory
    contentBase: path.join(__dirname, 'dist'),
    // Enable gzip compression for everything served
    compress: true,
    // Port for the dev server
    port: 9000,
  }
};