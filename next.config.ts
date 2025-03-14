import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pratonevoso.com',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wtvpano.feratel.com',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.monterosa2000.it',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'live-image.panomax.com',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.trinum.com',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'embed.skylinewebcams.com',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wtvpict.feratel.com',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.lovevda.it',
        port: '',
        pathname: '/**',
        search: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pila.it',
        port: '',
        pathname: '/**',
        search: '/**',
      },
    ],
  },
};

export default nextConfig;
