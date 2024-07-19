import React, { useEffect, useState } from "react";
import "../assets/styles/components.css";

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

  // useEffect to handle animation after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true); // Trigger animation after delay
    }, delay);
    return () => clearTimeout(timer); // Clear timeout on unmount or change
  }, [delay]);

  return (
    <div className={`contact-info ${animate ? "fall-down" : ""}`}>
      {/* Title */}
      <h2 className="contact-title" style={{ marginTop: "20px" }}>
        {title}
      </h2>

      {/* Icon container */}
      <div className="contact-icon-container">{icon}</div>

      {/* Text */}
      <h3 className="contact-text">{text}</h3>

      {/* Link (if provided) */}
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
