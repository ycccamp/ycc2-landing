const withPlugins = require('next-compose-plugins')

const optimizedImages = require('next-optimized-images')

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        mozjpeg: {
          quality: 75,
        },
        optipng: {
          optimizationLevel: 2,
        },
        webp: {
          preset: 'default',
          quality: 75,
        },
      },
    ],
  ],
  {
    env: {
      FULLSTORY: process.env.FULLSTORY,
    },
    exportTrailingSlash: true,
    experimental: {
      reactMode: 'concurrent',
      modern: true,
      granularChunks: true,
    },
  }
)
