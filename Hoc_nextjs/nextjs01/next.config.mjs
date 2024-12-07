/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_LOCAL: process.env.API_LOCAL,
        SERVER_API: process.env.SERVER_API,
        SERVER_API_TODO: process.env.SERVER_API_TODO,
        SERVER_API_LOCAL: process.env.SERVER_API_LOCAL,
    },
};

export default nextConfig;
