/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/docs",
        destination:
          "https://rizzui.gitbook.io/docs/getting-started/introduction",
      },
    ];
  },
};

export default nextConfig;
