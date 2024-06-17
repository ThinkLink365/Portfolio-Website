// /mnt/data/Project.tsx
import React from "react";

interface ProjectProps {
  title: string;
  text: string;
  img: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ title, text, img, link }) => {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
      <img src={img} alt={title} className="project-img" />
      <p className="project-text">{text}</p>
      <a
        href={link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
    </div>
  );
};

export default Project;
