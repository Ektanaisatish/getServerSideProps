// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// import { redirect } from "next/dist/server/api-utils";

// module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/About',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

