const express = require('express');
const { getAnalyticsData, getCombinedReport } = require('../controllers/analyticsController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:deviceId', protect, getAnalyticsData);
router.get('/:deviceId/report', protect, getCombinedReport);

module.exports = router;
