import React from "react";
import Project from "../components/Project"; // Importing Project component
import kirbyPong from "../assets/images/kirby-pong.png"; // Importing image for Kirby Pong project
import GETD from "../assets/images/GETDalt.png"; // Importing image for Portfolio Website project
import serverSide from "../assets/images/serverside.png"; // Importing image for Serverside Website project
import "../assets/styles/components.css"; // Importing component-specific styles

import {
  faJava,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"; // Importing FontAwesome icons for project technologies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component for rendering icons

// Array of project objects with details
const projects = [
  {
    title: "Kirby Pong",
    text: "A kirby themed pong game made with javafx featuring saving to a MySQL database, serialiation and various design patterns",
    img: kirbyPong,
    link: "https://github.com/ThinkLink365/KirbyPong",
    icons: [<FontAwesomeIcon icon={faJava} size="3x" />], // Array of FontAwesome icons for project technologies
  },
  {
    title: "Portfolio Website",
    text: "This very website. take a look at the inner workings of this website with frontend in react, html, css and javascript and backend in node.js and express",
    img: GETD,
    link: "https://github.com/ThinkLink365/Portfolio-Website",
    icons: [
      <FontAwesomeIcon icon={faHtml5} size="3x" />,
      <FontAwesomeIcon icon={faCss3Alt} size="3x" />,
      <FontAwesomeIcon icon={faJs} size="3x" />,
      <FontAwesomeIcon icon={faReact} size="3x" />,
      <FontAwesomeIcon icon={faNodeJs} size="3x" />,
    ], // Array of FontAwesome icons for project technologies
  },
  {
    title: "Serverside Website",
    text: "A website with serverside rendering using ejs, express and node.js. it features connection to a MongoDB database for creating, viewing and deleting bookings for a Yu-Gi-Oh work shop.",
    img: serverSide,
    link: "https://github.com/ThinkLink365/ServersideWebsite",
    icons: [
      <FontAwesomeIcon icon={faHtml5} size="3x" />,
      <FontAwesomeIcon icon={faCss3Alt} size="3x" />,
      <FontAwesomeIcon icon={faJs} size="3x" />,
      <FontAwesomeIcon icon={faNodeJs} size="3x" />,
    ], // Array of FontAwesome icons for project technologies
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      {/* Mapping through projects array to render Project components */}
      {projects.map((project, index) => (
        <Project
          key={index} // Using index as key for each Project component (not ideal, consider using a unique identifier if possible)
          title={project.title} // Passing project title as prop
          text={project.text} // Passing project description as prop
          img={project.img} // Passing project image as prop
          link={project.link} // Passing project GitHub link as prop
          icons={project.icons} // Passing array of technology icons as prop
        />
      ))}
    </div>
  );
};

export default Portfolio;
