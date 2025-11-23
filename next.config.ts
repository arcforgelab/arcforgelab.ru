import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // ensure images work when statically exported (no _next/image optimizer)
    },
};

export default nextConfig;
