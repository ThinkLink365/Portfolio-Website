import React from "react";
import "../assets/styles/components.css"; // Importing component-specific CSS styles
// Define props interface for Project component
interface ProjectProps {
  title: string; // Title of the project
  text: string; // Description or text related to the project
  img: string; // URL of the project image
  link: string; // External link for more information
  icons: React.ReactNode[]; // Array of React nodes for displaying icons
}

// Project component as a functional component
const Project: React.FC<ProjectProps> = ({ title, text, img, link, icons }) => {
  return (
    <div className="project">
      {" "}
      {/* Container for the project */}
      <h2 className="project-title">{title}</h2> {/* Project title */}
      <img src={img} alt={title} className="project-img" />{" "}
      {/* Project image */}
      <p className="project-text">{text}</p> {/* Project description */}
      <a
        href={link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More {/* Link to learn more about the project */}
      </a>
      <div className="project-icons">
        {" "}
        {/* Container for project icons */}
        {/* Mapping over icons array to display each icon */}
        {icons.map((icon, index) => (
          <div key={index} className="project-icon icon-size">
            {icon} {/* Each icon element */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project; // Exporting Project component as default
