// modules
import React, { useContext } from "react";
import { css } from "styled-components/macro";
import { FaPencilAlt, FaBrush, FaEraser } from "react-icons/fa";
import { GiPaintBucket } from "react-icons/gi";

// components/logic
import DataAttributesEnum from "../../~reusables/constants/dataAttributes";
import {
  EditorContext,
  EditorActType
} from "../../~reusables/contexts/EditorContext";

// styles
import { styled, useTheme } from "../../~reusables/contexts/ThemeContext";

const tools = [
  { tool: DataAttributesEnum.pencil, Component: FaPencilAlt },
  { tool: DataAttributesEnum.brush, Component: FaBrush },
  { tool: DataAttributesEnum.paint, Component: GiPaintBucket },
  { tool: DataAttributesEnum.eraser, Component: FaEraser }
];

const Tools: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const theme = useTheme();
  const { state, dispatch } = useContext(EditorContext);

  return (
    <StyledTools className={className}>
      {tools.map(({ tool, Component }) => (
        <div
          key={tool}
          css={css`
            background-color: ${tool === state.tool
              ? theme.colors.lightBackground
              : "#ffffff"};
          `}
          onClick={() =>
            dispatch({
              type: EditorActType.UPDATE_CANVAS_TOOL,
              payload: {
                tool: tool,
                shape: ""
              }
            })
          }
          data-tool={tool}
          title="Pencil"
        >
          <Component fontSize={32} color={theme.colors.greys[2]} />
        </div>
      ))}
    </StyledTools>
  );
};

const StyledTools = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: thin solid ${p => p.theme.colors.greys[8]};
  cursor: pointer;
  flex: 2;

  & > div {
    flex: 1;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${p => `${p.theme.space[6]}px ${p.theme.space[7]}px`};
  }

  & > div:hover {
    background: ${p => p.theme.colors.lightBackground};
  }
`;

export default Tools;
