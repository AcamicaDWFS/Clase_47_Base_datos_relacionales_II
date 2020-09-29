const Sequelize = require('sequelize');
const db = require('../config/database');

const Song = db.define('song', {
  name: {
    type: Sequelize.STRING(100),
  },
  duration: {
    type: Sequelize.INTEGER,
  },
  album_id: {
    type: Sequelize.INTEGER,
  },
  band_id: {
    type: Sequelize.INTEGER,
  },
  release_date: {
    type: Sequelize.DATE,
  },
});

module.exports = Song;
