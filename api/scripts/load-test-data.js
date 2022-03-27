const assert = require('assert');
const path = require('path');

const debug = require('debug')('tdc:scripts/load-test-data');
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
});

const { User, UserToken, UserRole } = require('../src/services/db');

if (process.env.RUN_FUNCTION === 'scripts/load-test-data') {
  const TEST_USER_ID = -1;
  const TEST_USER_EMAIL = 'test@gmail.com';
  const TEST_USER_FIREBASE_AUTH_UID = 'test-firebase-auth-uid';

  (async () => {
    debug('Loading test data...');

    await User.create({
      id: TEST_USER_ID,
      email: TEST_USER_EMAIL,
      firebaseAuthUid: TEST_USER_FIREBASE_AUTH_UID,
    });

    await UserRole.create({
      id: -1,
      userId: TEST_USER_ID,
      role: 'ADMIN',
    });

    await UserToken.create({
      id: -1,
      userId: TEST_USER_ID,
      secret: 'test-secret-1',
    });

    await UserToken.create({
      id: -2,
      userId: TEST_USER_ID,
    });

    debug('Done');
  })();
}
