import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "http://192.168.56.1",
    "http://localhost:3000",
    "http://0.0.0.0:3000",
  ],
};

export default nextConfig;
