/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["avatars.githubusercontent.com", "github.githubassets.com"],
	},
};

module.exports = nextConfig;
