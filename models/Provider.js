const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Provider = sequelize.define('Provider', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.GEOMETRY('POINT'), // Store latitude and longitude
    allowNull: false,
  },
  foodType: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Provider;
