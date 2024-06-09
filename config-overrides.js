// config-overrides.js
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@digi/arbetsformedlingen/loader': path.resolve(__dirname, 'node_modules/@digi/arbetsformedlingen/loader/index.js')
  })
);