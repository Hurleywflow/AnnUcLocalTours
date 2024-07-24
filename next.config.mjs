import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
// next.config.js
import nextIntl from "next-intl/plugin";

const nextIntlConfig = nextIntl(
	// Path to the `next-intl` configuration file
	"./config.ts",
);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextIntlConfig(nextConfig);
// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default withNextIntl(nextConfig);
