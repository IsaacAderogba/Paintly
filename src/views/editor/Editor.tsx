// modules
import React from "react";

// components/logic
import Toolbox from "../../components/organisms/Toolbox";
import Canvas from "../../components/organisms/Canvas";
import Commands from "../../components/molecules/Commands";
import Shapes from "../../components/molecules/Shapes";
import PencilsAndBrushes from "../../components/molecules/PencilsAndBrushes";
import LineWidth from "../../components/molecules/LineWidth";
import Swatches from "../../components/molecules/Swatches";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Editor: React.FC = () => {
  return (
    <StyledEditor>
      <Toolbox>
        <Commands />
        <Shapes />
        <PencilsAndBrushes />
        <LineWidth />
      </Toolbox>
      <Canvas />
      <Toolbox>
        <Swatches />
      </Toolbox>
    </StyledEditor>
  );
};
const StyledEditor = styled.section``;

export default Editor;
