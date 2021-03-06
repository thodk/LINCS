import _debug from 'debug';
import path from 'path';

const debug = _debug('app:config:_base');
const config = {
  env: process.env.NODE_ENV || 'development',

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  pathBase: path.resolve(__dirname, '../'),
  dirClient: 'client',
  dirDist: 'dist',
  dirServer: 'server',
  dirTest: 'tests',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  serverHost: 'localhost',
  serverPort: 3000,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compilerCssModules: true,
  compilerDevTool: 'cheap-module-eval-source-map',
  compilerHashType: 'hash',
  compilerFailOnWarning: false,
  compilerQuiet: false,
  compilerPublicPath: '/LINCS/',
  compilerStats: {
    chunks: false,
    chunkModules: false,
    colors: true,
  },
  compilerVendor: [
    'bootstrap',
    'camelize',
    'd3',
    'extend',
    'history',
    'jquery',
    'jquery-ui',
    'lodash',
    'moment',
    'normalizr',
    'react',
    'react-addons-css-transition-group',
    'react-dom',
    'react-modal',
    'react-redux',
    'react-router',
    'react-router-redux',
    'react-slick',
    'redux',
    'redux-form',
    'redux-thunk',
    'tether',
  ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverageEnabled: true,
  coverageReporters: [
    { type: 'text-summary' },
    { type: 'lcov', dir: 'coverage' },
  ],
};

/*
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
*/

// ------------------------------------
// Environment
// ------------------------------------
// N.B. globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env': {
    NODE_ENV: JSON.stringify(config.env),
    // TZ: 'America/New_York',
  },
  NODE_ENV: config.env,
  __DEV__: config.env === 'development',
  __PROD__: config.env === 'production',
  __TEST__: config.env === 'test',
  __DEBUG__: config.env === 'development',
  __DEBUG_NEW_WINDOW__: false,
};

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json');

config.compilerVendor = config.compilerVendor
  .filter((dep) => {
    if (pkg.dependencies[dep]) {
      return true;
    }

    debug(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/config/index.js`
    );
    return false;
  });

// ------------------------------------
// Utilities
// ------------------------------------
config.utilsPaths = (() => {
  const resolve = path.resolve;

  const base = (...args) =>
    resolve.apply(resolve, [config.pathBase, ...args]);

  return {
    base,
    client: base.bind(null, config.dirClient),
    dist: base.bind(null, config.dirDist),
  };
})();

export default config;
