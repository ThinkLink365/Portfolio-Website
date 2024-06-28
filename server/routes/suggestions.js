const express = require('express');
const { body, validationResult } = require('express-validator');
const ProjectSuggestion = require('../models/projectModel'); // Adjust the path if needed

const router = express.Router();

// Route to handle submitting suggestions
router.post(
  '/',
  [
    // Validation middleware using express-validator
    body('idea').notEmpty().withMessage('Idea is required'), // Idea field must not be empty
    body('category').notEmpty().withMessage('Category is required'), // Category field must not be empty
    body('suggestion').notEmpty().withMessage('Suggestion is required'), // Suggestion field must not be empty
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // If there are validation errors, respond with a 400 status and send the errors
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Destructure idea, category, and suggestion from request body
      const { idea, category, suggestion } = req.body;
      
      // Create a new instance of ProjectSuggestion model with the received data
      const newSuggestion = new ProjectSuggestion({ idea, category, suggestion });

      // Save the new suggestion to the database
      await newSuggestion.save();

      // Respond with a 201 status indicating success
      res.status(201).send('Suggestion saved');
    } catch (error) {
      // If an error occurs during saving, log the error and respond with a 500 status
      console.error('Error saving suggestion:', error.message);
      res.status(500).send('Error saving suggestion: ' + error.message);
    }
  }
);

module.exports = router;
