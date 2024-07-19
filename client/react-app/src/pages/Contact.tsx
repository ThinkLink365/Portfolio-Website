import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap"; // Importing Row and Col components from react-bootstrap
import ContactInfo from "../components/ContactInfo"; // Importing ContactInfo component
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importing FontAwesome icons for GitHub and LinkedIn
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Importing FontAwesome icon for Email
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component for rendering icons
import "../assets/styles/components.css"; // Importing component-specific styles

const Contact: React.FC = () => {
  // Array of contact items with title, text, icon, and link
  const contactItems = [
    {
      title: "Email",
      text: "Send me an email!",
      icon: (
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" />
      ),
      link: "mailto:liamodubhgain2003@gmail.com", // Email link
    },
    {
      title: "Github",
      text: "Take a look at all my projects on Github!",
      icon: (
        <FontAwesomeIcon icon={faGithub} size="3x" className="contact-icon" />
      ),
      link: "https://github.com/ThinkLink365", // GitHub profile link
    },
    {
      title: "LinkedIn",
      text: "Connect with me on LinkedIn!",
      icon: (
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="contact-icon" />
      ),
      link: "https://www.linkedin.com/in/liam-%C3%B3-dubhg%C3%A1in-4392272b5/", // LinkedIn profile link
    },
  ];

  // State to manage visibility of each contact item
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(contactItems.length).fill(false)
  );

  // Effect to animate visibility of contact items sequentially
  useEffect(() => {
    contactItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newVisibleItems = [...prev];
          newVisibleItems[index] = true;
          return newVisibleItems;
        });
      }, index * 650); // Delay each item's appearance by 650ms
    });
  }, [contactItems]);

  return (
    <Row className="justify-content-center">
      {contactItems.map((item, index) => (
        <Col md={12} className="mb-4" key={index}>
          {visibleItems[index] && ( // Render contact item if visible
            <div className="contact-info-container">
              <ContactInfo {...item} delay={0} />{" "}
              {/* Render ContactInfo component with item props */}
            </div>
          )}
        </Col>
      ))}
      <Col md={12} className="mb-4"></Col>
    </Row>
  );
};

export default Contact;
