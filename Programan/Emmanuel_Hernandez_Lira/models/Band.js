const Sequelize = require('sequelize');
const db = require('../config/database');

const Band = db.define(
  'band',
  {
    name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    members: {
      type: Sequelize.STRING(500),
      allowNull: false,
      unique: true,
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_date: {
      type: Sequelize.DATE,
      defaultValue: null,
    },
    country: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Band;
