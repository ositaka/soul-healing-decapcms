
// const { withContentlayer } = require('next-contentlayer')

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
  //   locales: ['en', 'pt'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  // },
}

const withNextIntl = require("next-intl/plugin")("./i18n.js");

const { withContentlayer } = require("next-contentlayer");

module.exports = withNextIntl(withContentlayer(nextconfig));

// module.exports = withContentlayer(nextconfig)