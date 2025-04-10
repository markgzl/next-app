import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  env:{
    exportHtml: "true"
  }
};

export default nextConfig;
