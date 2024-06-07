import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import thwomp from "../assets/images/open_thwomp.png";

const thwompFall = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

const StyledThwomp = styled.img<{ visible: boolean }>`
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${(props) => (props.visible ? thwompFall : "none")} 0.3s linear
    forwards;
`;

interface ThwompProps {
  visible: boolean;
  onHitBottom: () => void;
}

const Thwomp: React.FC<ThwompProps> = ({ visible, onHitBottom }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onHitBottom, 300);
      return () => clearTimeout(timer);
    }
  }, [visible, onHitBottom]);

  return <StyledThwomp src={thwomp} alt="Falling Thwomp" visible={visible} />;
};

export default Thwomp;
