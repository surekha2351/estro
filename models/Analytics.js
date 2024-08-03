const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  timestamp: { type: Date, required: true },
  metricName: { type: String, required: true },
  value: { type: Number, required: true },
});

module.exports = mongoose.model('Analytics', analyticsSchema);
