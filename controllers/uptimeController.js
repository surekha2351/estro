const Uptime = require('../models/Uptime');

const getUptimeData = async (req, res) => {
  try {
    const data = await Uptime.find({ deviceId: req.params.deviceId });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUptimeData };
