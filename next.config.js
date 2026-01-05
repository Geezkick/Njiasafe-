/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.dicebear.com', 'images.unsplash.com', 'localhost'],
  },
  i18n: {
    locales: ['en', 'sw'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
