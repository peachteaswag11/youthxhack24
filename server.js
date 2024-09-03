const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const requestRoutes = require('./routes/requests');
const matchingRoutes = require('./routes/matching');

const app = express();
app.use(bodyParser.json());


// API Routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/requests', requestRoutes);
app.use('/match', matchingRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
