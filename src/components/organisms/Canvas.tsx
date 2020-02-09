// modules
import React from "react";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Canvas: React.FC = () => {
  return <StyledCanvas>hi</StyledCanvas>;
};

const StyledCanvas = styled.canvas`
  width: 640px;
  height: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: white;
  transform: translate(-50%, -50%);
`;

export default Canvas;
