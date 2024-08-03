const Uptime = require('../models/Uptime');
const Analytics = require('../models/Analytics');
const mongoose = require('mongoose');

const generateTestData = async () => {
  try {
    
    await Uptime.deleteMany({});
    await Analytics.deleteMany({});

    const deviceId = 'device-1'; 
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 2); 
    const endDate = new Date();

    const intervalInMinutes = 15; 
    const statuses = ['up', 'down'];

    
    let currentTime = startDate;
    while (currentTime <= endDate) {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      await Uptime.create({ deviceId, timestamp: currentTime, status });

      currentTime = new Date(currentTime.getTime() + intervalInMinutes * 60000); 
    }

    
    currentTime = startDate;
    while (currentTime <= endDate) {
      const metrics = [
        { metricName: 'cpu_usage', value: Math.random() * 100 },
        { metricName: 'memory_usage', value: Math.random() * 100 },
        { metricName: 'disk_io', value: Math.random() * 100 },
      ];

      for (const metric of metrics) {
        await Analytics.create({ deviceId, timestamp: currentTime, ...metric });
      }

      currentTime = new Date(currentTime.getTime() + intervalInMinutes * 60000); 
    }

    console.log('Test data generated successfully');
  } catch (err) {
    console.error('Error generating test data:', err);
  }
};

module.exports = { generateTestData };
