const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
});

const nextConfig = {
};

module.exports = withBundleAnalyzer(nextConfig);
