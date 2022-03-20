const assert = require('assert');
const path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../../../.env'),
});
const debug = require('debug')('tdc:api/services/db');
const { Sequelize } = require('sequelize');

const DB_CONFIG = {
  USERNAME: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  HOSTNAME: process.env.DB_HOST,
  PORT: process.env.DB_PORT,
  NAME: process.env.DB_NAME,
  DIALECT: 'mysql',
};

debug(DB_CONFIG);

const db = new Sequelize(
  `${DB_CONFIG.DIALECT}://${DB_CONFIG.USERNAME}:${DB_CONFIG.PASSWORD}@${DB_CONFIG.HOSTNAME}:${DB_CONFIG.PORT}/${DB_CONFIG.NAME}`
);

(async () => {
  try {
    await db.authenticate();
    debug(
      `Connection to ${DB_CONFIG.NAME} database established on: ${DB_CONFIG.HOSTNAME}:${DB_CONFIG.PORT}`
    );
  } catch (err) {
    console.error(err);
    await db.close();
  }
})();
