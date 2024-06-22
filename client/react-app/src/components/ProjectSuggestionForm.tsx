import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "./Impressive.css";

const ProjectSuggestionForm: React.FC = () => {
  const [idea, setIdea] = useState("");
  const [category, setCategory] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const [errors, setErrors] = useState<{
    idea?: string;
    category?: string;
    suggestion?: string;
  }>({});

  useEffect(() => {
    const formFadeInDelay = setTimeout(() => {
      setFormVisible(true);
    }, 2000);

    return () => clearTimeout(formFadeInDelay);
  }, []);

  const validate = () => {
    const newErrors: { idea?: string; category?: string; suggestion?: string } =
      {};
    if (!idea) newErrors.idea = "Idea is required";
    if (!category) newErrors.category = "Category is required";
    if (!suggestion) {
      newErrors.suggestion = "Suggestion is required";
    } else if (suggestion.length > 500) {
      newErrors.suggestion = "Suggestion must be 500 characters or less";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const response = await fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idea, category, suggestion }),
    });

    if (response.ok) {
      alert("Suggestion submitted successfully");
    } else {
      alert("Failed to submit suggestion");
    }
  };

  return (
    <div className={`fade-in ${formVisible ? "visible" : ""}`}>
      <h2>Submit Project Suggestions</h2>
      <p>
        If you have any suggestions for projects I should do, please fill out
        this form
      </p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            isInvalid={!!errors.category}
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

        <Form.Group controlId="formIdea">
          <Form.Label>Project Idea</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            isInvalid={!!errors.idea}
          />
          <Form.Control.Feedback type="invalid">
            {errors.idea}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formSuggestion">
          <Form.Label>Project Suggestion</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your project suggestion"
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            isInvalid={!!errors.suggestion}
          />
          <Form.Control.Feedback type="invalid">
            {errors.suggestion}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ProjectSuggestionForm;
