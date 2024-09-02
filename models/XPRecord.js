const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const XPRecord = sequelize.define('XPRecord', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  xpPoints: DataTypes.INTEGER,
  dateEarned: DataTypes.DATE,
});

module.exports = XPRecord;
