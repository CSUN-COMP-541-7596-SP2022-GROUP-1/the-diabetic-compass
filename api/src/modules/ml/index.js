const assert = require('assert');
const path = require('path');
const { spawn } = require('child_process');
const debug = require('debug')('tdc:ml');
const { json } = require('micro');

const { makeApiError } = require('../../../lib/make-api-error');
const { validate } = require('../../../lib/validate');
const { authorize, authenticate } = require('../../auth');
const { createTransaction, User } = require('../../services/db');

async function ml(params, context, { UserInjection = User } = {}) {
  validate(
    {
      type: 'object',
      required: [
        'sex',
        'ageCategory',
        'educationLevel',
        'incomeLevel',
        'hasHighBloodPressure',
        'hasHighCholesterol',
        'hadCholesterolCheckLastFiveYears',
        'hasHealthCare',
        'couldntAffordDoctorVisit',
        'bodyMassIndex',
        'generalHeathRating',
        'isHeavyDrinker',
        'isSmoker',
        'hadStroke',
        'hasHeartDiseaseOrAttack',
        'hasDifficultyWithStairs',
        'isPhysicallyActive',
        'eatsFruits',
        'eatsVegetables',
      ],
      properties: {
        sex: {
          type: 'number',
        },
        ageCategory: {
          type: 'number',
        },
        educationLevel: {
          type: 'number',
        },
        incomeLevel: {
          type: 'number',
        },

        hasHighBloodPressure: {
          type: 'number',
        },
        hasHighCholesterol: {
          type: 'number',
        },
        hadCholesterolCheckLastFiveYears: {
          type: 'number',
        },
        hasHealthCare: {
          type: 'number',
        },
        couldntAffordDoctorVisit: {
          type: 'number',
        },
        bodyMassIndex: {
          type: 'number',
        },
        generalHeathRating: {
          type: 'number',
        },

        isHeavyDrinker: {
          type: 'number',
        },
        isSmoker: {
          type: 'number',
        },
        hadStroke: {
          type: 'number',
        },
        hasHeartDiseaseOrAttack: {
          type: 'number',
        },
        hasDifficultyWithStairs: {
          type: 'number',
        },
        isPhysicallyActive: {
          type: 'number',
        },
        eatsFruits: {
          type: 'number',
        },
        eatsVegetables: {
          type: 'number',
        },
      },
    },
    params
  );

  assert(context.user && context.user.id, makeApiError(422, 'Invalid user'));

  authorize('ml', context, {});

  const data = {
    params,
  };
  const errors = [];

  const cwd = process.cwd();
  const mainPyPath = path.resolve(cwd, 'python', 'main.py');

  debug(mainPyPath);

  return { data, errors };
}

exports.POST = async (req) => ml(await json(req), await authenticate(req));
