
const { withContentlayer } = require('next-contentlayer')

const nextconfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // disableImportAliasWarning: true,
  images: {
    // formats: ['image/avif', 'image/webp'],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'the-golden-healing.com',
        port: '',
        pathname: '/images/',
      },
    ],
  },
  // i18n: {
  //   locales: ['nl-be', 'en'],
  //   defaultLocale: 'nl-be',
  //   localeDetection: false,
  // },
}


module.exports = withContentlayer(nextconfig)