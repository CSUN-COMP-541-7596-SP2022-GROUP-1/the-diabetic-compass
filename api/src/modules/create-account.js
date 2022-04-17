const { json, createError } = require('micro');

const { microAssert } = require('../../lib/micro-assert');
const { microValidate } = require('../../lib/micro-validate');
const { authorize, authenticate, TOKEN_TYPES } = require('../auth');
const { User, UserRole, createTransaction } = require('../services/db');

async function _createAccount(
  params,
  context,
  { UserInjection = User, UserRoleInjection = UserRole } = {}
) {
  authorize('create-account', context);
  microValidate(
    {
      type: 'object',
      properties: {
        email: { type: 'string' },
      },
      required: ['email'],
      additionalProperties: true,
    },
    params
  );
  microAssert(!context.user, 400, 'User already exists');
  microAssert(context.token, 400, 'Bad request');

  const [tokenType, tokenSecret] = context.token.split('/');

  let transaction;
  let user;
  let userRole;
  try {
    transaction = await createTransaction();

    if (tokenType === TOKEN_TYPES.FIREBASE_AUTH) {
      user = await UserInjection.create(
        {
          email: params.email,
          firebaseAuthUid: tokenSecret,
          firstName: params.firstName,
          lastName: params.lastName,
        },
        { raw: true }
      );
    }

    userRole = await UserRoleInjection.create({
      userId: user.id,
    });

    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw createError(500, 'Database error', err);
  }

  return {
    data: {
      user,
      userRole,
    },
  };
}

exports.POST = async (req) =>
  _createAccount(await json(req), await authenticate(req));
