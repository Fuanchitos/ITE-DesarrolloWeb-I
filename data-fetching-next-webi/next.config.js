/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'fakestoreapi.com',
            pathname: '/img/**'
        },
    {
            protocol: 'https',
            hostname: 'i.dummyjson.com',
            pathname: '/data/products/**'
    }
    ]
    }
}

module.exports = nextConfig
