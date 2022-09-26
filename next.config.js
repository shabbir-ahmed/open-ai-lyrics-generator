/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		OPENAI_API_KEY: "sk-",
	},
};

module.exports = nextConfig;
