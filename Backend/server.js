const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/database');

//routes
const projectRoutes = require('./routes/projects');
const clientRoutes = require('./routes/clients');
const contactRoutes = require('./routes/contacts');
const newsletterRoutes = require('./routes/newsletters');

// Import middleware
const errorHandler = require('./middleware/errorHandler');


const app = express();

app.use(cors({
  origin: [
    'https://client-and-admin-management.vercel.app',
    'http://localhost:5173',
    'http://localhost:5000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Client and Admin Management API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      projects: '/api/projects',
      clients: '/api/clients',
      contacts: '/api/contacts',
      newsletters: '/api/newsletters'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Backend is running',
    timestamp: new Date(),
    mongodb: 'connected'
  });
});

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/newsletters', newsletterRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});