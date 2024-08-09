/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com",
                port: "",
            },
            {
                protocol: 'https',
                hostname: 'ir2afcyawc9dpczt.public.blob.vercel-storage.com',
                port: '',
              },
        ]
    }
};

export default nextConfig;
