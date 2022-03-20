const assert = require('assert');

require('dotenv').config();
const debug = require('debug')('tdc:api/services/db');
const { Sequelize } = require('sequelize');

const USERNAME = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const HOST = process.env.DB_HOST;
const PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const db = new Sequelize(`mysql://${USERNAME}:${PASSWORD}@${HOST}:${PORT}`);

(async () => {
  try {
    await db.authenticate();
    debug(`Connection to db established on: ${HOST}:${PORT}`);
  } catch (err) {
    console.error(err);
    await db.close();
  }
})();
