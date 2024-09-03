const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dietaryPreferences: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  xp: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = User;
