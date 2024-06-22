const mongoose = require('mongoose');

const ProjectSuggestionSchema = new mongoose.Schema({
  idea: { type: String, required: true },
  category: { type: String, required: true },
  suggestion: { type: String, required: true },
});

const ProjectSuggestion = mongoose.model('ProjectSuggestion', ProjectSuggestionSchema);

module.exports = ProjectSuggestion;
