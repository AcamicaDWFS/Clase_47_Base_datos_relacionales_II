const Sequelize = require('sequelize');
const db = require('../config/database');

const Album = db.define(
  'album',
  {
    name: {
      type: Sequelize.STRING(100),
    },
    band_id: {
      type: Sequelize.INTEGER.UNSIGNED,
    },
    release_date: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Album;
