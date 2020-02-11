// modules
import React, { useContext } from "react";
import { css } from "styled-components/macro";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquare, FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";

// components/logic
import DataAttributesEnum from "../../~reusables/constants/dataAttributes";
import {
  EditorContext,
  EditorActType
} from "../../~reusables/contexts/EditorContext";

// styles
import { styled, useTheme } from "../../~reusables/contexts/ThemeContext";

const shapes = [
  { shape: DataAttributesEnum.line, Component: AiOutlineMinus },
  { shape: DataAttributesEnum.rectangle, Component: FaRegSquare },
  { shape: DataAttributesEnum.circle, Component: FaRegCircle },
  { shape: DataAttributesEnum.triangle, Component: FiTriangle }
];

const Shapes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { state, dispatch } = useContext(EditorContext);
  const theme = useTheme();

  return (
    <StyledShapes className={className}>
      {shapes.map(({ shape, Component }) => (
        <div
          onClick={() =>
            dispatch({
              type: EditorActType.UPDATE_CANVAS_TOOL,
              payload: {
                tool: "",
                shape: shape
              }
            })
          }
          data-shape={shape}
          title="Line"
          css={css`
            background-color: ${shape === state.shape
              ? theme.colors.lightBackground
              : "#ffffff"};
          `}
        >
          <Component fontSize={32} color={theme.colors.greys[2]} />
        </div>
      ))}
    </StyledShapes>
  );
};

const StyledShapes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: thin solid ${p => p.theme.colors.greys[8]};
  flex: 2;

  & > div {
    flex: 1;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${p => `${p.theme.space[6]}px ${p.theme.space[7]}px`};
  }

  & > div:hover {
    background: ${p => p.theme.colors.lightBackground};
  }
`;

export default Shapes;
