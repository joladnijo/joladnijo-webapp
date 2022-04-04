/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'e2e', '__tests__'],
  },
};

module.exports = nextConfig;
