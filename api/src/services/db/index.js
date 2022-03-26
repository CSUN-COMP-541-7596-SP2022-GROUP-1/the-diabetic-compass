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
  DATABASE_NAME: process.env.DB_NAME,
  DIALECT: process.env.DB_DIALECT,
};

debug(DB_CONFIG);

const db = new Sequelize({
  database: DB_CONFIG.DATABASE_NAME,
  username: DB_CONFIG.USERNAME,
  password: DB_CONFIG.PASSWORD,
  dialect: DB_CONFIG.DIALECT,
  host: DB_CONFIG.HOSTNAME,
  port: DB_CONFIG.PORT,
});

exports.db = db;
