module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/post-office',
      },
    ]
  },
}
