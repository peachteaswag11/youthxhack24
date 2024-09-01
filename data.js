// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize with your MySQL connection details
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Username
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Hostname
    port: process.env.DB_PORT, // Port number
    dialect: 'mysql',
    logging: false, // Disable logging; change to console.log for debugging
  }
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to MySQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;



// models/User.js
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



// models/Request.js
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

// Define association
Request.belongsTo(User);

module.exports = Request;



// models/Provider.js
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



// models/XPRecord.js
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

// Define association
XPRecord.belongsTo(User);

module.exports = XPRecord;



// services/userService.js
const User = require('../models/User');

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser };



// services/userService.js
const User = require('../models/User');

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { getUserById };
