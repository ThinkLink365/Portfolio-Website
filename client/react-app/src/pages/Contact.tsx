import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "../components/ContactInfo";
import ProjectSuggestionForm from "../components/ProjectSuggestionForm";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/Impressive.css";

const Contact: React.FC = () => {
  const contactItems = [
    {
      title: "Email",
      text: "Send me an email!",
      icon: (
        <FontAwesomeIcon icon={faEnvelope} size="3x" className="contact-icon" />
      ),
      link: "mailto:liamodubhgain2003@gmail.com",
    },
    {
      title: "Github",
      text: "Take a look at all my projects on Github!",
      icon: (
        <FontAwesomeIcon icon={faGithub} size="3x" className="contact-icon" />
      ),
      link: "https://github.com/ThinkLink365",
    },
    {
      title: "LinkedIn",
      text: "Connect with me on LinkedIn!",
      icon: (
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="contact-icon" />
      ),
      link: "https://www.linkedin.com/in/liam-%C3%B3-dubhg%C3%A1in-4392272b5/",
    },
  ];

  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    Array(contactItems.length).fill(false)
  );

  useEffect(() => {
    contactItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newVisibleItems = [...prev];
          newVisibleItems[index] = true;
          return newVisibleItems;
        });
      }, index * 650);
    });
  }, [contactItems]);

  return (
    <Container className="container">
      <Row className="justify-content-center">
        {contactItems.map((item, index) => (
          <Col md={12} className="mb-4" key={index}>
            {visibleItems[index] && (
              <div className="contact-info-container">
                <ContactInfo {...item} delay={0} />
              </div>
            )}
          </Col>
        ))}
        <Col md={12} className="mb-4">
          <ProjectSuggestionForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
