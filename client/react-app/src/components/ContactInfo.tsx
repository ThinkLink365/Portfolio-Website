// ContactInfo.tsx
import React from "react";
import styled, { css } from "styled-components";

interface StyledContactInfoProps {
  visible: boolean;
  side: "left" | "right";
}

interface ContactItem {
  title: string;
  text: string;
  link?: string;
}

interface ContactInfoProps {
  contactItems: ContactItem[];
}

const StyledContactInfo = styled.div<StyledContactInfoProps>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 1s ease-in, transform 1s ease-in;
  position: absolute;
  top: 50%; /* Center vertically */
  transform: translateY(-50%)
    ${(props) =>
      props.visible
        ? "translateX(0)"
        : `translateX(${props.side === "left" ? "-" : ""}100%)`};
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.side === "left" ? "flex-end" : "flex-start"};
  ${(props) =>
    props.side === "left" &&
    css`
      left: calc(100% + 20px); // Adjust as needed
    `}
  ${(props) =>
    props.side === "right" &&
    css`
      right: calc(100% + 20px); // Adjust as needed
    `}
`;
const ContactInfo: React.FC<StyledContactInfoProps & ContactInfoProps> = ({
  visible,
  side,
  contactItems,
}) => {
  return (
    <StyledContactInfo visible={visible} side={side}>
      {contactItems.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          {item.link && <a href={item.link}>Link</a>}
        </div>
      ))}
    </StyledContactInfo>
  );
};

export default ContactInfo;
