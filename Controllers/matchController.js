const matchingService = require('../services/matchingService');

const matchRequests = async (req, res) => {
  try {
    const matchedProviders = await matchingService.match(req.body);
    res.json(matchedProviders);
  } catch (error) {
    res.status(500).json({ error: 'Matching failed', details: error.message });
  }
};

module.exports = { matchRequests };
