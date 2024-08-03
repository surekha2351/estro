const Analytics = require('../models/Analytics');

const getAnalyticsData = async (req, res) => {
  try {
    const data = await Analytics.find({ deviceId: req.params.deviceId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getCombinedReport = async (req, res) => {
  try {
    const uptimeData = await Analytics.find({ deviceId: req.params.deviceId });
    const analyticsData = await Analytics.find({ deviceId: req.params.deviceId });

    const report = {
      uptime: uptimeData,
      analytics: analyticsData,
    };

    res.json(report);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAnalyticsData, getCombinedReport };
