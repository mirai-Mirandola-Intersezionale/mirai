const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/dRmhEgGsWH',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/mirai-plus/mirai',
        permanent: true,
      },
    ]
  },
})

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  })
  