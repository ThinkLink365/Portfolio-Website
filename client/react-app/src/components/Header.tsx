import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap JS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome icons
import { faMoon } from "@fortawesome/free-solid-svg-icons"; // Moon icon from FontAwesome
import "./header.css"; // Custom header styles
const Header: React.FC = () => {
  // State to manage light/dark mode
  const [lightMode, setLightMode] = useState<boolean>(() => {
    // Initialize state based on saved theme in localStorage, defaulting to false (dark mode)
    const savedTheme = localStorage.getItem("lightMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Effect to toggle light/dark mode class on body based on state change
  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, [lightMode]);

  // Function to toggle light/dark mode
  const toggleLightMode = () => {
    setLightMode((prevMode: boolean) => {
      const newMode = !prevMode;
      // Store updated theme preference in localStorage
      localStorage.setItem("lightMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <header className="header fixed-top">
      {/* Navbar component */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blue">
        <div className="container-fluid">
          {/* Navbar brand */}
          <Link className="navbar-brand" to="/">
            Portfolio
          </Link>
          {/* Navbar toggler for responsive design */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar collapse with navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navbar links */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Button to toggle light/dark mode */}
            <button
              onClick={toggleLightMode}
              className={`btn ${
                lightMode ? "btn-light-mode" : "btn-dark-mode"
              }`}
            >
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
