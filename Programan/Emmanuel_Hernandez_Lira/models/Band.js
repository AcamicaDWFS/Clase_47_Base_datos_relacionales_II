const Sequelize = require('sequelize');
const db = require('../config/database');

const Band = db.define('band', {
  name: {
    type: Sequelize.STRING(50),
  },
  members: {
    type: Sequelize.STRING(500),
  },
  start_date: {
    type: Sequelize.DATE,
  },
  end_date: {
    type: Sequelize.DATE,
  },
  country: {
    type: Sequelize.STRING(50),
  },
});

module.exports = Band;
