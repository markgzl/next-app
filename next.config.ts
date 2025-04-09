import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/next-app' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-app/' : ''
};

export default nextConfig;
