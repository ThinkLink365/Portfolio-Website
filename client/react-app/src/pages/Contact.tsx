import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Thwomp from "../components/Thwomp";
import ContactInfo from "../components/ContactInfo";
import GroundBreak from "../components/GroundBreak";

interface ContactProps {
  onThwompHitBottom: () => void;
}

const Contact: React.FC<ContactProps> = ({ onThwompHitBottom }) => {
  const [thwompVisible, setThwompVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [groundBreakVisible, setGroundBreakVisible] = useState(false);

  useEffect(() => {
    setThwompVisible(true);
    const timer = setTimeout(() => {
      setGroundBreakVisible(true);
      setTimeout(() => {
        setInfoVisible(true);
      }, 500); // Adjusted timing for info visibility
    }, 300); // Adjusted timing for ground break
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container style={{ position: "relative" }}>
      <Row className="justify-content-center">
        <Col md="auto">
          <div style={{ position: "relative", display: "inline-block" }}>
            <Thwomp visible={thwompVisible} onHitBottom={onThwompHitBottom} />
            {groundBreakVisible && <GroundBreak />}
            <ContactInfo
              visible={infoVisible}
              side="right"
              contactItems={[
                {
                  title: "Email",
                  text: "contact@example.com",
                  link: "mailto:contact@example.com",
                },
                { title: "Phone", text: "(123) 456-7890" },
                { title: "Address", text: "123 Main St, Anytown, USA" },
              ]}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
