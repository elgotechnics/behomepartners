import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/notre-agence",
        destination: "/agences",
        permanent: true,
      },
      {
        source: "/nos-agences",
        destination: "/agences",
        permanent: true,
      },
      {
        source: "/nos-references",
        destination: "/references",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
