import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow fetching from any domain for potential future image optimization
  images: {
    domains: [],
  },
};

export default nextConfig;
