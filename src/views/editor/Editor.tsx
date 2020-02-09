// modules
import React from "react";

// components/logic
import Toolbox from "../../components/organisms/Toolbox";
import Canvas from "../../components/organisms/Canvas";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Editor: React.FC = () => {
  return (
    <StyledEditor>
      <Toolbox />
      <Canvas />
      <Toolbox />
    </StyledEditor>
  );
};
const StyledEditor = styled.section``;

export default Editor;
