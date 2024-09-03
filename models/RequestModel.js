const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Request = sequelize.define('Request', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  foodProviderId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'FoodProviders',
      key: 'id'
    }
  },
  urgency: DataTypes.INTEGER,
  location: DataTypes.GEOGRAPHY,
  dietaryNeeds: DataTypes.JSON,
});

module.exports = Request;
