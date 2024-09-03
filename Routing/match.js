const express = require('express');
const { matchRequests } = require('../controllers/matchingController');
const router = express.Router();

router.post('/match', matchRequests);

module.exports = router;
