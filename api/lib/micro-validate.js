const assert = require('assert');
const Ajv = require('ajv');
const { createError } = require('micro');

function microValidate(schema, params) {
  assert(
    schema && Object.keys(schema).length,
    createError(500, 'Invalid schema')
  );

  const ajv = new Ajv();

  const validate = ajv.compile(schema);
  const valid = validate(params);
  if (!valid) {
    throw createError(400, validate.errors[0].message);
  }
}
exports.microValidate = microValidate;
