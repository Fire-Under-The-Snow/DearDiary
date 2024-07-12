/** @type {import('next').NextConfig} */
import nextra from "nextra";
const nextConfig = {};

const withnextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});
export default withnextra(nextConfig);

