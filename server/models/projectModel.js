const mongoose = require('mongoose');

// Define the schema for ProjectSuggestion
const ProjectSuggestionSchema = new mongoose.Schema({
  idea: { type: String, required: true },       // Field for the idea
  category: { type: String, required: true },   // Field for the category
  suggestion: { type: String, required: true } // Field for the suggestion itself
});

// Create a Mongoose model based on the schema
const ProjectSuggestion = mongoose.model('ProjectSuggestion', ProjectSuggestionSchema);

// Export the model
module.exports = ProjectSuggestion;
