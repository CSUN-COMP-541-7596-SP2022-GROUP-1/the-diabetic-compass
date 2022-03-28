const assert = require('assert');
const { createError } = require('micro');

function microAssert(condition, code = 500, msg = 'Internal Server Error') {
  try {
    assert(condition);
  } catch (err) {
    throw createError(code, msg, err);
  }
}
exports.microAssert = microAssert;
