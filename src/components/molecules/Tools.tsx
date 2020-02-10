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

const Tools: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const theme = useTheme();
  const { state, dispatch } = useContext(EditorContext);

  return (
    <StyledTools className={className}>
      <div
        css={css`
          background-color: ${DataAttributesEnum.pencil === state.tool
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              tool: DataAttributesEnum.pencil,
              shape: ""
            }
          })
        }
        data-tool={DataAttributesEnum.pencil}
        title="Pencil"
      >
        <FaPencilAlt fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div
        css={css`
          background-color: ${DataAttributesEnum.brush === state.tool
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              tool: DataAttributesEnum.brush,
              shape: ""
            }
          })
        }
        data-tool={DataAttributesEnum.brush}
        title="Brush"
      >
        <FaBrush fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div
        css={css`
          background-color: ${DataAttributesEnum.paint === state.tool
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              tool: DataAttributesEnum.paint,
              shape: ""
            }
          })
        }
        data-tool={DataAttributesEnum.paint}
        title="Paint"
      >
        <GiPaintBucket fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div
        css={css`
          background-color: ${DataAttributesEnum.eraser === state.tool
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              tool: DataAttributesEnum.eraser,
              shape: ""
            }
          })
        }
        data-tool={DataAttributesEnum.eraser}
        title="Eraser"
      >
        <FaEraser fontSize={32} color={theme.colors.greys[2]} />
      </div>
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
