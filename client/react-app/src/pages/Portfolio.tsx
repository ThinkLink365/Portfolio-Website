import React from "react";
import Project from "../components/Project"; // Importing Project component
import kirbyPong from "../assets/images/kirby-pong.png"; // Importing image for Kirby Pong project
import portfolio from "../assets/images/portfolio.png"; // Importing image for Portfolio Website project
import serverSide from "../assets/images/serverside.png"; // Importing image for Serverside Website project
import space_explorer from "../assets/images/space_explorer.png"; //Importing image for Space_Explorer project
import tkd_theory from "../assets/images/tkd_theory.png"; // Importing image for TKD Theory Website project
import microservices from "../assets/images/microservices.png"; // Importing image for Generative AI-Assisted Microservices project
import pokemon from "../assets/images/pokemon.png"; // Importing image for Pokémon Platinum Nuzlocke Analytics project
import "../assets/styles/components.css"; // Importing component-specific styles

import {
  faJava,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
  faDocker,
} from "@fortawesome/free-brands-svg-icons"; // Importing FontAwesome icons for project technologies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component for rendering icons
import { faC } from "@fortawesome/free-solid-svg-icons";

// Array of project objects with details
const projects = [
  {
    title: "Pokémon Platinum Nuzlocke Analytics",
    text: "A full-stack visual analytics platform for exploring more than 200 Pokémon, comparing stats and type matchups, planning teams, and tracking encounters. Built with interactive D3.js visualisations and a FastAPI backend.",
    img: pokemon,
    link: "https://github.com/ThinkLink365/FYP_Implementation",
    website: "https://fyp-implementation-484815.web.app/",
    icons: [
      <FontAwesomeIcon icon={faReact} size="3x" />,
      <FontAwesomeIcon icon={faJs} size="3x" />,
      <FontAwesomeIcon icon={faPython} size="3x" />,
      <FontAwesomeIcon icon={faDocker} size="3x" />,
    ],
  },
  {
    title: "Generative AI-Assisted Microservices",
    text: "An AI-assisted, microservices-based e-commerce platform with independent catalogue, order, payment, and customer-support services. It uses FastAPI, RabbitMQ, Docker Compose, Kubernetes, Prometheus, and Grafana, with comprehensive automated testing.",
    img: microservices,
    link: "https://github.com/ThinkLink365/Data-Driven-Microservices-Assignment-2",
    icons: [
      <FontAwesomeIcon icon={faPython} size="3x" />,
      <FontAwesomeIcon icon={faDocker} size="3x" />,
    ],
  },
  {
    title: "TKD Theory Website",
    text: "An online Tae-Kwon-Do theory resource designed to make theory easy to access and study.",
    img: tkd_theory,
    link: "https://github.com/ThinkLink365/TKD_Theory_Website",
    website: "https://tkdtheory.com/",
    icons: [
      <FontAwesomeIcon icon={faHtml5} size="3x" />,
      <FontAwesomeIcon icon={faCss3Alt} size="3x" />,
      <FontAwesomeIcon icon={faJs} size="3x" />,
      <FontAwesomeIcon icon={faReact} size="3x" />,
    ],
  },
  {
    title: "Space Explorer",
    text: "A space explorer game made in C. The objective? Find the life-changing mixer. The risk? Run out of fuel before you find it...",
    img: space_explorer,
    link: "https://github.com/ThinkLink365/space_explorer",
    icons: [<FontAwesomeIcon icon={faC} size="3x" />], // Array of FontAwesome icons for project technologies
  },
  {
    title: "Kirby Pong",
    text: "A kirby themed pong game made with javafx featuring saving to a MySQL database, serialiation and various design patterns",
    img: kirbyPong,
    link: "https://github.com/ThinkLink365/KirbyPong",
    icons: [<FontAwesomeIcon icon={faJava} size="3x" />], // Array of FontAwesome icons for project technologies
  },
  {
    title: "Portfolio Website",
    text: "This very website. take a look at the inner workings of this website with frontend in react, html, css and javascript",
    img: portfolio,
    link: "https://github.com/ThinkLink365/Portfolio-Website",
    icons: [
      <FontAwesomeIcon icon={faHtml5} size="3x" />,
      <FontAwesomeIcon icon={faCss3Alt} size="3x" />,
      <FontAwesomeIcon icon={faJs} size="3x" />,
      <FontAwesomeIcon icon={faReact} size="3x" />,
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
          key={index} // Using index as key for each Project component
          title={project.title} // Passing project title as prop
          text={project.text} // Passing project description as prop
          img={project.img} // Passing project image as prop
          link={project.link} // Passing project GitHub link as prop
          website={project.website} // Passing optional live website link
          icons={project.icons} // Passing array of technology icons as prop
        />
      ))}
    </div>
  );
};

export default Portfolio;
