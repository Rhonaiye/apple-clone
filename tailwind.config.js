module.exports = {
  content: [
    './*.html',             // For index.html in the root directory
    './src/**/*.{html,js}', // For files in the src directory
    './public/**/*.html'    // For files in the public directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}