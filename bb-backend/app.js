// Imports
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Custom imports
const config = require('./utils/config');
const authRoutes = require('./routes/auth');

const app = express()

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log(error.message)
  })

// Middlewares
app.use(cors()); // Handle CORS issues
app.use(express.json()); // For parsing JSON requests

// Routes
app.use('/api/auth', authRoutes);

module.exports = app