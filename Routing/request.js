const express = require('express');
const { createRequest } = require('../controllers/requestController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createRequest);

module.exports = router;
