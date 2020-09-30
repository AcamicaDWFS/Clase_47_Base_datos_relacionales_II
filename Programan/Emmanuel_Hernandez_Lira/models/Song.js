const Sequelize = require('sequelize');
const db = require('../config/database');

const Song = db.define(
  'song',
  {
    name: {
      type: Sequelize.STRING(100),
    },
    duration: {
      type: Sequelize.INTEGER.UNSIGNED,
    },
    album_id: {
      type: Sequelize.INTEGER.UNSIGNED,
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

module.exports = Song;
