// const withTM = require('next-transpile-modules')(['vcard4']); // pass the modules you would like to see transpiled
const withTM = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');
const withSvgr = require('next-plugin-svgr');

const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    // console.log(options.webpack.version); // 4.44.1
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  },

  images: {
    domains: ['firebasestorage.googleapis.com', 'res.cloudinary.com'],
  },
};

module.exports = withPlugins([withSvgr, nextConfig]);

// module.exports = nextConfig;
