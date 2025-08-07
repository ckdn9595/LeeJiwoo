/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  target: 'serverless',

  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{
                removeRasterImages: false,
                removeStyleElement: false,
                removeUnknownsAndDefaults: false,
              }],
            },
          },
        },
      ],
    });

    return conf;
  },

  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      
      // 여기에 더 많은 경로를 추가하세요
    };
  },
});
