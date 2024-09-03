const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  contact: DataTypes.STRING,
  dietaryPreferences: DataTypes.JSON,
  xp: DataTypes.INTEGER,
});

module.exports = User;
