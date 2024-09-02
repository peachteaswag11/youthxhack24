const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const XPRecord = sequelize.define('XPRecord', {
  xpGained: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

XPRecord.belongsTo(User);

module.exports = XPRecord;
