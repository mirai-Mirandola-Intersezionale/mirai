const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    }
})

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
  