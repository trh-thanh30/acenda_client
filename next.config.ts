import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        hostname: "cdn.pixabay.com",
        protocol: "https",
      },
      {
        hostname: "icons.veryicon.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
