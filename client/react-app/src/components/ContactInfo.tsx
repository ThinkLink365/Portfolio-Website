import React, { useEffect, useState } from "react";
import "./Impressive.css";

interface ContactItem {
  title: string;
  text: string;
  icon: React.ReactNode;
  link: string;
  delay: number;
}

const ContactInfo: React.FC<ContactItem> = ({
  title,
  text,
  icon,
  link,
  delay,
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`contact-info ${animate ? "fall-down" : ""}`}>
      <h2 className="contact-title">{title}</h2>
      <div className="contact-icon-container">{icon}</div>
      <h3 className="contact-text">{text}</h3>
      {link && (
        <a
          className="contact-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      )}
    </div>
  );
};

export default ContactInfo;
