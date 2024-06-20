// /mnt/data/Project.tsx
import React from "react";

interface ProjectProps {
  title: string;
  text: string;
  img: string;
  link: string;
  icons: React.ReactNode[];
}

const Project: React.FC<ProjectProps> = ({ title, text, img, link, icons }) => {
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
      <div className="project-icons">
        {icons.map((icon, index) => (
          <div key={index} className="project-icon icon-size">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
