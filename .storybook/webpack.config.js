const baseConfig = require('../webpack.config');

module.exports = ({ config: storybookBaseConfig }) => {
  storybookBaseConfig.resolve.alias = baseConfig.resolve.alias;

  return storybookBaseConfig;
};
