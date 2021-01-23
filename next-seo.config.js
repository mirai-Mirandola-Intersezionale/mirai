const title =
  'mirai | Collettivo LGBTQI+ Transfemminista'
const description = 'Risorse per la comunità'
const SEO = {
  title,
  description,
  canonical: 'https://www.mirai.plus',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.mirai.plus',
    site_name: 'mirai',
    title,
    description,
    images: [
      {
        url: 'https://www.mirai.plus/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
    twitter: {
      handle: '@thegayascienza',
      site: '@thegayascienza',
      cardType: 'summary_large_image',
    },
  },
}
export default SEO