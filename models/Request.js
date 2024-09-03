const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Request = sequelize.define('Request', {
  foodType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  urgency: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  location: {
    type: DataTypes.GEOMETRY('POINT'), // Store latitude and longitude
    allowNull: false,
  },
});

Request.belongsTo(User);

module.exports = Request;
