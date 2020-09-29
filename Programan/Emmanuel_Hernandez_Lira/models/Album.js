const Sequelize = require('sequelize');
const db = require('../config/database');

const Album = db.define('album', {
  name: {
    type: Sequelize.STRING(100),
  },
  band_id: {
    type: Sequelize.INTEGER,
  },
  release_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Album;
