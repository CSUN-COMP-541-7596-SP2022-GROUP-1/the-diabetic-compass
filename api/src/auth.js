// api auth logic
const assert = require('assert');
const debug = require('debug')('tdc:auth');

const { User, UserRole, UserFirebaseAuth } = require('./services/db');
const { makeApiError } = require('../lib/make-api-error');

const TOKEN_TYPES = {
  FIREBASE_AUTH: 'firebase',
  TDC_AUTH: 'tdc',
};
exports.TOKEN_TYPES = TOKEN_TYPES;

async function authenticate(req) {
  const { authorization: credentials } = req.headers;

  if (!credentials) {
    throw makeApiError(400, 'Missing credentials');
  }

  const [type, token] = (credentials || '').split(' ');
  assert(type === 'Bearer', makeApiError(400, 'Bad request'));
  assert(token, makeApiError(400, 'Bad request'));

  const [tokenType, tokenSecret] = token.split('/');
  assert(
    [TOKEN_TYPES.FIREBASE_AUTH, TOKEN_TYPES.TDC_AUTH].includes(tokenType),
    makeApiError(400, 'Bad credentials type')
  );

  const context = {
    token,
  };

  if (tokenType === TOKEN_TYPES.FIREBASE_AUTH) {
    try {
      context.userFirebaseAuth =
        (tokenSecret &&
          (await UserFirebaseAuth.findOne({
            where: { authUid: tokenSecret },
            raw: true,
          }))) ||
        null;

      context.user =
        (context.userFirebaseAuth &&
          (await User.findOne({
            where: {
              id: context.userFirebaseAuth.userId,
            },
            raw: true,
          }))) ||
        null;

      context.userRole =
        (context.user &&
          (await UserRole.findOne({
            where: {
              userId: context.user.id,
            },
            raw: true,
          }))) ||
        null;
    } catch (err) {
      debug(err);
      throw makeApiError(500, 'Failed to authenticate', err);
    }
  }

  debug(context);

  return context;
}
exports.authenticate = authenticate;

function _capabilities(context) {
  if (!context) {
    return [];
  }
  // Basic capabilities
  const basicCapabilities = ['create-account'];

  // Scoped capabilities

  return [...basicCapabilities];
}

function authorize(capability, context) {
  const authorized = _capabilities(context).includes(capability);

  if (!authorized) {
    throw makeApiError(401, 'Unauthorized');
  }

  return true;
}
exports.authorize = authorize;
