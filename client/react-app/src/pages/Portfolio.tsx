// /mnt/data/Portfolio.tsx
import React from "react";
import Project from "../components/Project";
import kirbyPong from "../assets/images/kirby-pong.png";
import GETD from "../assets/images/GETDalt.png";
import serverSide from "../assets/images/serverside.png";
const projects = [
  {
    title: "Kirby Pong",
    text: "A kirby themed pong game made with javafx featuring saving to a MySQL database, serialiation and various design patterns",
    img: kirbyPong,
    link: "https://github.com/ThinkLink365/KirbyPong",
  },
  {
    title: "Portfolio Website",
    text: "This very website. take a look at the inner workings of this website with frontend in react, html, css and javascript and backend in node.js and express",
    img: GETD,
    link: "https://github.com/ThinkLink365/Portfolio-Website",
  },
  {
    title: "Serverside Website",
    text: "A website with serverside rendering using ejs, express and node.js. it features connection to a MongoDB database for creating, viewing and deleting bookings for a Yu-Gi-Oh work shop.",
    img: serverSide,
    link: "https://github.com/ThinkLink365/ServersideWebsite",
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
        />
      ))}
    </div>
  );
};

export default Portfolio;
// add icons to each project of what languages and other tech is used
