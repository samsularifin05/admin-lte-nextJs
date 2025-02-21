/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/",
        destination: "/"
      },
      {
        source: "/dashboard",
        destination: "/"
      },
      {
        source: "/about",
        destination: "/"
      },

      {
        source: "/login",
        destination: "/"
      }
    ];
  }
};

module.exports = nextConfig;
