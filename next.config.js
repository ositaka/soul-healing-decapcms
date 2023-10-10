
const { withContentlayer } = require('next-contentlayer')

const nextconfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // disableImportAliasWarning: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'soul-healing-decapcms.vercel.app/',
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