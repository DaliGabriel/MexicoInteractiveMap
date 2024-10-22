/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vredeburg.netlify.app',
        pathname: '/**', // Match any path
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**', // Match any path
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**', // Match any path
      },
    ],
  },
};

export default nextConfig;