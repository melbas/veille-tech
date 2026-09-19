/** @type {import('next').NextConfig} */
export default {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/veille-tech",
  webpack: (config) => {
    config.resolve.alias["@"] = new URL("./", import.meta.url).pathname;
    return config;
  },
};
