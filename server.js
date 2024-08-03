const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const uptimeRoutes = require('./routes/uptimeRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const { generateTestData } = require('./utils/dataGenerator');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8001;

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Handle preflight requests
app.options('*', cors());

// Connect to the database
connectDB()
  .then(() => {
    console.log('MongoDB connected');

    // Generate test data
    return generateTestData();
  })
  .then(() => {
    console.log('Test data generation completed.');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB or generating test data:', err);
  });

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/api/auth', authRoutes);
app.use('/api/uptime', uptimeRoutes);
app.use('/api/analytics', analyticsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
