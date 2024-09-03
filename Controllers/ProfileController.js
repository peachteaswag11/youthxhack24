const { User } = require('../models/User');
const { verifyToken } = require('../config/auth');

const getProfile = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized', details: error.message });
  }
};

const updateProfile = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    const decoded = verifyToken(token);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const { name, contact, dietaryPreferences } = req.body;
    user.name = name || user.name;
    user.contact = contact || user.contact;
    user.dietaryPreferences = dietaryPreferences || user.dietaryPreferences;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized', details: error.message });
  }
};

module.exports = { getProfile, updateProfile };
