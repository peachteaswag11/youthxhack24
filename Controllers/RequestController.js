const { Request } = require('../models/Request');

const createRequest = async (req, res) => {
  const { userId, foodProviderId, urgency, location, dietaryNeeds } = req.body;
  try {
    const newRequest = await Request.create({
      userId,
      foodProviderId,
      urgency,
      location,
      dietaryNeeds
    });
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: 'Request creation failed', details: error.message });
  }
};

module.exports = { createRequest };
