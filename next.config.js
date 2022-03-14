/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  publicRuntimeConfig: {
    backendApiBaseUrl: process.env.ENVIRONMENT || 'http://localhost:8000',
  }
}

module.exports = nextConfig
