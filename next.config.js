/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [];
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false,
                net: false,
                tls: false,
            }
        }
        return config
    },
    serverOptions: {
        host: '0.0.0.0',
        port: 3000
    }
}

module.exports = nextConfig
