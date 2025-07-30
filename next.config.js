/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/dashboard/:path*',
        destination: 'http://localhost:5001/api/dashboard/:path*',
      },
    ];
  },
};

module.exports = nextConfig;