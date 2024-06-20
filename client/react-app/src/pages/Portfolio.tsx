// /mnt/data/Portfolio.tsx
import React from "react";
import Project from "../components/Project";
import kirbyPong from "../assets/images/kirby-pong.png";
import GETD from "../assets/images/GETDalt.png";
import serverSide from "../assets/images/serverside.png";

import {
  faJava,
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const projects = [
  {
    title: "Kirby Pong",
    text: "A kirby themed pong game made with javafx featuring saving to a MySQL database, serialiation and various design patterns",
    img: kirbyPong,
    link: "https://github.com/ThinkLink365/KirbyPong",
    icons: [<FontAwesomeIcon icon={faJava} size="3x" />],
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
    ],
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
    ],
  },
];
const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          text={project.text}
          img={project.img}
          link={project.link}
          icons={project.icons}
        />
      ))}
    </div>
  );
};

export default Portfolio;
