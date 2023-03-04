/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "next/font/google",
        options: { subsets: ["latin", "latin-ext"] },
      },
    ],
    legacyBrowsers: false,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/user",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
