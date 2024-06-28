// Required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express application
const app = express();

// Middleware setup
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/Portfolio', { 
  // Additional options can be added here if needed
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Import routes
const suggestionsRoutes = require('./routes/suggestions'); 
app.use('/contact', suggestionsRoutes); 

// Start the server
const PORT = process.env.PORT || 3001; // Use environment port if available, otherwise use 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
