import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      // No custom loaders needed; SWC is built-in
    },
  },
};

export default nextConfig;
