/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  images: {
    unoptimized: true,
  },

  async headers() {
    return [
      {
        // Images
        source: '/:path*(.jpg|.jpeg|.png|.webp|.avif|.svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Fonts
        source: '/:path*(.woff|.woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // JS / CSS (Next static assets)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
