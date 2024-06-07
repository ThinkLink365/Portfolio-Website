import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// Function to generate random values
const getRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// Define keyframes for debris animation with random values
const debrisAnimation = (
  translateX: number,
  translateY: number,
  rotate: number,
  scale: number
) => keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale}); opacity: 0; }
`;

// Styled component for debris
const Debris = styled.div<{
  translateX: number;
  translateY: number;
  rotate: number;
  scale: number;
}>`
  width: 100px;
  height: 20px;
  background: #8b4513; /* Brown color */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${({ translateX, translateY, rotate, scale }) =>
    css`
      ${debrisAnimation(translateX, translateY, rotate, scale)} 1s forwards
    `}; /* Increase the duration to 2s */
`;

// Styled component for ground break
const GroundBreak: React.FC = () => {
  const [debrisElements, setDebrisElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const viewportWidth = window.innerWidth; // Get viewport width dynamically
    const viewportHeight = window.innerHeight; // Get viewport height dynamically

    const elements = Array.from({ length: 100 }).map((_, index) => (
      <Debris
        key={index}
        translateX={getRandomValue(-viewportWidth / 2, viewportWidth / 2)} // Random value for translateX
        translateY={getRandomValue(-viewportHeight, -50)} // Random value for translateY
        rotate={getRandomValue(180, 720)}
        scale={getRandomValue(0.3, 0.7)}
      />
    ));
    setDebrisElements(elements);
  }, []);

  return <>{debrisElements}</>;
};

export default GroundBreak;
