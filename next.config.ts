import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        protocol:'https',
        hostname:'lh5.googleusercontent.com'
      },
      {
        protocol:'https',
        hostname:'streetviewpixels-pa.googleapis.com'
      }
    ]
  }
};

export default nextConfig;
