const assert = require('assert');
// const debug = require('debug')('tdc:users/read');
const fp = require('lodash/fp');

const { makeApiError } = require('../../../lib/make-api-error');
const { authorize, authenticate } = require('../../auth');
const { User, UserRole } = require('../../services/db');

async function usersRead(
  _params,
  context,
  { UserInjection = User, UserRoleInjection = UserRole } = {}
) {
  assert(context.user && context.user.id, makeApiError(401, 'Unauthorized'));
  assert(
    context.userRole && context.userRole.role,
    makeApiError(401, 'Unauthorized')
  );

  const user = await UserInjection.findOne({
    where: {
      id: context.user.id,
    },
    raw: true,
  });

  const userRole = await UserRoleInjection.findOne({
    where: {
      userId: context.user.id,
    },
    raw: true,
  });

  authorize('users/read', context, { userId: user.id });

  return {
    data: {
      user: fp.pick(['email', 'firstName', 'lastName'], user),
      userRole: fp.pick(['role'], userRole),
    },
    errors: [],
  };
}

exports.GET = async (req) => usersRead({}, await authenticate(req));
