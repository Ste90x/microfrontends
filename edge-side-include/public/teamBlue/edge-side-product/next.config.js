// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  assetPrefix: 'http://localhost:3000'
})