import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/styles/components.css"; // Importing component-specific CSS styles

const ProjectSuggestionForm: React.FC = () => {
  // State variables to manage form inputs and state
  const [idea, setIdea] = useState(""); // State for project idea input
  const [category, setCategory] = useState(""); // State for category selection
  const [suggestion, setSuggestion] = useState(""); // State for project suggestion input
  const [formVisible, setFormVisible] = useState(false); // State to manage form visibility

  // State for managing form validation errors
  const [errors, setErrors] = useState<{
    idea?: string;
    category?: string;
    suggestion?: string;
  }>({});

  // Effect to delay the visibility of the form using setTimeout
  useEffect(() => {
    const formFadeInDelay = setTimeout(() => {
      setFormVisible(true);
    }, 2000); // Delay set to 2000ms (2 seconds)

    return () => clearTimeout(formFadeInDelay); // Cleanup function to clear timeout
  }, []);

  // Function to validate form inputs
  const validate = () => {
    const newErrors: { idea?: string; category?: string; suggestion?: string } =
      {};
    if (!idea) newErrors.idea = "Idea is required"; // Validate if idea is empty
    if (!category) newErrors.category = "Category is required"; // Validate if category is not selected
    if (!suggestion) {
      newErrors.suggestion = "Suggestion is required"; // Validate if suggestion is empty
    } else if (suggestion.length > 500) {
      newErrors.suggestion = "Suggestion must be 500 characters or less"; // Validate suggestion length
    }
    return newErrors; // Return the validation errors
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    const newErrors = validate(); // Validate form inputs
    if (Object.keys(newErrors).length > 0) {
      // If there are validation errors, set them in state and return
      setErrors(newErrors);
      return;
    }
    setErrors({}); // Clear any previous errors

    // Perform API request to submit suggestion
    const response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idea, category, suggestion }), // Convert form data to JSON format
    });

    if (response.ok) {
      alert("Suggestion submitted successfully"); // Show success message if submission is successful
    } else {
      alert("Failed to submit suggestion"); // Show error message if submission fails
    }
  };

  return (
    <div className={`fade-in ${formVisible ? "visible" : ""}`}>
      {/* Form for submitting project suggestions */}
      <h2>Submit Project Suggestions</h2>
      <p>
        If you have any suggestions for projects I should do, please fill out
        this form
      </p>

      {/* React Bootstrap Form component */}
      <Form onSubmit={handleSubmit}>
        {/* Select input for category */}
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            isInvalid={!!errors.category} // Set invalid state based on errors
          >
            <option value="">Select a category</option>
            <option value="Website">Web Development</option>
            <option value="App">Mobile App Development</option>
            <option value="Game">Game Development</option>
            <option value="Other">Other</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.category}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Text input for project idea */}
        <Form.Group controlId="formIdea">
          <Form.Label>Project Idea</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            isInvalid={!!errors.idea} // Set invalid state based on errors
          />
          <Form.Control.Feedback type="invalid">
            {errors.idea}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Textarea input for project suggestion */}
        <Form.Group controlId="formSuggestion">
          <Form.Label>Project Suggestion</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your project suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            isInvalid={!!errors.suggestion} // Set invalid state based on errors
          />
          <Form.Control.Feedback type="invalid">
            {errors.suggestion}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProjectSuggestionForm; // Exporting ProjectSuggestionForm component as default
