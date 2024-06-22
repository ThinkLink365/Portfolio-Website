const express = require('express');
const { body, validationResult } = require('express-validator');
const ProjectSuggestion = require('../models/projectModel'); // Adjust the path if needed

const router = express.Router();

// Route to handle submitting suggestions
router.post(
  '/',
  [
    body('idea').notEmpty().withMessage('Idea is required'),
    body('category').notEmpty().withMessage('Category is required'),
    body('suggestion').notEmpty().withMessage('Suggestion is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { idea, category, suggestion } = req.body;
      const newSuggestion = new ProjectSuggestion({ idea, category, suggestion });
      await newSuggestion.save();
      res.status(201).send('Suggestion saved');
    } catch (error) {
      console.error('Error saving suggestion:', error.message);
      res.status(500).send('Error saving suggestion: ' + error.message);
    }
  }
);

module.exports = router;
