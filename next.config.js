
const { withContentlayer } = require('next-contentlayer')

const nextconfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // disableImportAliasWarning: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'soul-healing-new.netlify.app/',
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