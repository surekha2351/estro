const express = require('express');
const { getUptimeData } = require('../controllers/uptimeController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:deviceId', protect, getUptimeData);

module.exports = router;
