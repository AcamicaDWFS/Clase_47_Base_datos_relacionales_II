require('dotenv/config');
const Sequelize = require('sequelize');

const {
  DB_NAME: DATABASE,
  DB_USER: USER,
  DB_PASS: PASSWORD,
  DB_TIMEZONE: TIMEZONE,
} = process.env;

module.exports = new Sequelize(DATABASE, USER, PASSWORD, {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: TIMEZONE,
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
