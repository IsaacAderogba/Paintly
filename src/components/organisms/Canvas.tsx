// modules
import React from "react";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Canvas: React.FC = () => {
  return <StyledCanvas>
    hi
  </StyledCanvas>;
};

const StyledCanvas = styled.canvas`
  width: 640px;
  height: 480px;
`;

export default Canvas;
