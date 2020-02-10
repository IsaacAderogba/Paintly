// modules
import React from "react";
import { RouteComponentProps } from "react-router-dom";

// components/logic
import Toolbox from "../../components/organisms/Toolbox";
import Canvas from "../../components/organisms/Canvas";
import Commands from "../../components/molecules/Commands";
import Shapes from "../../components/molecules/Shapes";
import Tools from "../../components/molecules/Tools";
import LineWidth from "../../components/molecules/LineWidth";
import Swatches from "../../components/molecules/Swatches";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Editor: React.FC<RouteComponentProps> = () => {
  
  return (
    <StyledEditor>
      <Toolbox align="left">
        <Commands className="group commands" />
        <Shapes className="group shapes" />
        <Tools className="group tools" />
        <LineWidth className="group linewidth" />
      </Toolbox>
      <Canvas />
      <Toolbox align="right">
        <Swatches className="group swatches" />
      </Toolbox>
    </StyledEditor>
  );
};
const StyledEditor = styled.section``;

export default Editor;
