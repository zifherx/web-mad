import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      },
    ],
  },
  distDir: "dist",
  assetPrefix: "",
  devIndicators: {
    position: "bottom-left",
  },
};

export default nextConfig;
