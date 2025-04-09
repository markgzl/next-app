import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath:  '/next-app',
  assetPrefix: '/next-app/' 
};

export default nextConfig;
