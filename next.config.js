/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: Remove this domain after mock data removed
    domains: [
      'nordicapis.com',
    ],
  },
}

module.exports = nextConfig
