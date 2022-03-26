const assert = require('assert');
const path = require('path');

const debug = require('debug')('tdc:scripts/load-test-data');
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
});

const { User } = require('../src/services/db/models');

if (process.env.RUN_FUNCTION === 'scripts/load-test-data') {
  (async () => {
    debug('Loading test data...');
    await User.sync();
  })();
}
