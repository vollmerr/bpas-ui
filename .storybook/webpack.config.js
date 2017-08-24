const path = require('path');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.resolve.alias['bpas-ui'] = path.resolve(__dirname, '../src/components');

  if (env === 'PRODUCTION') {
    // see https://github.com/storybooks/storybook/issues/1570
    baseConfig.plugins = baseConfig.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  return config;
};
