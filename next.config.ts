import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath:  '/next-app',
  assetPrefix: '/next-app/',
  env:{
    exportHtml: "true"
  }
};

export default nextConfig;
