/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_ENDPOINT: process.env.APP_ENDPOINT,
    NEXT_BACKEND_ENDPOINT: process.env.NEXT_BACKEND_ENDPOINT,
  },
  images: {
    // loader: 'imgix',
    // path: process.env.APP_ENDPOINT,
    loader: 'akamai',
    path: '',
    // path: process.env.APP_ENDPOINT,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
