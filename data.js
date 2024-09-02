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


