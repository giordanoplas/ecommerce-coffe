/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: process.env.NEXT_IMAGE_PROTOCOL,
                hostname: process.env.NEXT_IMAGE_HOST,
                port: process.env.NEXT_IMAGE_PORT,
                pathname: process.env.NEXT_IMAGE_PATHNAME,
            },
        ],
    },
};

export default nextConfig;