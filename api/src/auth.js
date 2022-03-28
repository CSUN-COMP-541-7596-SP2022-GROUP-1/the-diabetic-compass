// api auth logic
const { createError } = require('micro');

const { User, UserRole } = require('./services/db');
const { microAssert } = require('../lib/micro-assert');

const TOKEN_TYPES = {
  FIREBASE_AUTH: 'firebase-auth-uid',
  TDC_AUTH: 'tdc-user-token',
};
exports.TOKEN_TYPES = TOKEN_TYPES;

async function authenticate(req) {
  const { authorization: credentials } = req.headers;

  if (!credentials) {
    throw createError(401, 'Missing credentials');
  }

  const [type, token] = (credentials || '').split(' ');
  microAssert(type === 'Bearer', 400, 'Bad request');
  microAssert(token, 400, 'Bad request');

  const [tokenType, tokenSecret] = token.split('/');
  microAssert(
    [TOKEN_TYPES.FIREBASE_AUTH].includes(tokenType),
    400,
    'Bad request'
  );

  const context = {
    token,
  };
  if (tokenType === TOKEN_TYPES.FIREBASE_AUTH) {
    try {
      context.user =
        (tokenSecret &&
          (await User.findOne({
            where: {
              firebaseAuthUid: tokenSecret,
            },
            raw: true,
          }))) ||
        null;

      context.userRole =
        (context.user?.id &&
          (await UserRole.findOne({
            include: [
              {
                model: User,
                required: true,
                attributes: [],
              },
            ],
            attributes: {
              /**
               * HACK to remove the UserId field from the userRole object
               */
              exclude: ['UserId'],
              /** End of HACK */
            },
            where: {
              userId: context.user?.id,
            },
            raw: true,
          }))) ||
        null;
    } catch (err) {
      throw createError(500, 'Internal Server Error', err);
    }
  }

  return context;
}
exports.authenticate = authenticate;

function _capabilities(context) {
  if (!context) {
    return [];
  }
  // Universal capabilities
  const universalCapabilities = ['create-account'];

  // Additional capabilities
  const scopedCapabilities = [];

  return [...universalCapabilities, ...scopedCapabilities];
}

function authorize(capability, context) {
  const authorized = _capabilities(context).includes(capability);

  if (!authorized) {
    throw createError(401, 'Unauthorized');
  }

  return true;
}
exports.authorize = authorize;
