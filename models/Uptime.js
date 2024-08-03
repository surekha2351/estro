const mongoose = require('mongoose');

const uptimeSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  timestamp: { type: Date, required: true },
  status: { type: String, required: true, enum: ['up', 'down'] },
});

module.exports = mongoose.model('Uptime', uptimeSchema);
