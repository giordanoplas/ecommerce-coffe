/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
                hostname: process.env.NEXT_PUBLIC_BACKEND_HOST,
                port: process.env.NEXT_PUBLIC_BACKEND_PORT,
                pathname: process.env.NEXT_PUBLIC_BACKEND_PATHNAME,
            },
        ],
    },
};

export default nextConfig;