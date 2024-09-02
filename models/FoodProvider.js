const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FoodProvider = sequelize.define('FoodProvider', {
  name: DataTypes.STRING,
  location: DataTypes.GEOGRAPHY,
  contact: DataTypes.STRING,
  dietaryOptions: DataTypes.JSON,
});

module.exports = FoodProvider;
