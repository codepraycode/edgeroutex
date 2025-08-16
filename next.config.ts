import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codia-f2c.s3.us-west-1.amazonaws.com",
      },
    ]
  }
};

export default nextConfig;
