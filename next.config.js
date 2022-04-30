const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */
const nextConfig = withSvgr({
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      layoutRaw: true
    } 
  }
})

module.exports = nextConfig;
