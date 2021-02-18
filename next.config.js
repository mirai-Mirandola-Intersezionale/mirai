const withPWA = require('next-pwa')
 
module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
})

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  })

  module.exports = {
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
        {
          source: '/notion',
          destination: 'https://www.notion.so/miraiplus/mirai-479dd829dd7648b38961935d1314e847',
          permanent: true,
        },
      ]
    },
  }
  