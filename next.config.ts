import { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /** @type {import('next').NextConfig} */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};
export default nextConfig;
