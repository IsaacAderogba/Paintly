// modules
import React, { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";

// components/logic
import Toolbox from "../../components/organisms/Toolbox";
import Canvas from "../../components/organisms/Canvas";
import Commands from "../../components/molecules/Commands";
import Shapes from "../../components/molecules/Shapes";
import Tools from "../../components/molecules/Tools";
import LineWidth from "../../components/molecules/LineWidth";
import Swatches from "../../components/molecules/Swatches";
import { EditorContext } from "../../~reusables/contexts/EditorContext";
import BrushWidth from "../../components/molecules/BrushWidth";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";
import DataAttributesEnum from "../../~reusables/constants/dataAttributes";

const Editor: React.FC<RouteComponentProps> = () => {
  const { state } = useContext(EditorContext);
  return (
    <StyledEditor>
      <Toolbox align="left">
        <Commands className="group commands" />
        <Shapes className="group shapes" />
        <Tools className="group tools" />
        {state.tool === DataAttributesEnum.paint ||
        state.tool === DataAttributesEnum.eraser ? null : state.shape ||
          state.tool === DataAttributesEnum.pencil ? (
          <LineWidth className="group linewidth" />
        ) : (
          <BrushWidth className="group brushwidth" />
        )}
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
