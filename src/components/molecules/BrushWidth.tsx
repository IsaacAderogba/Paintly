// modules
import React, { useContext } from "react";
import { css } from "styled-components/macro";

// components/logic
import {
  EditorContext,
  EditorActType
} from "../../~reusables/contexts/EditorContext";
import DataAttributesEnum from "../../~reusables/constants/dataAttributes";

// styles
import { styled, ThemeContext } from "../../~reusables/contexts/ThemeContext";

const brushWidths = [
  { brushWidth: DataAttributesEnum.brushWidth1 },
  { brushWidth: DataAttributesEnum.brushWidth2 },
  { brushWidth: DataAttributesEnum.brushWidth3 },
  { brushWidth: DataAttributesEnum.brushWidth4 },
  { brushWidth: DataAttributesEnum.brushWidth5 }
];

const BrushWidth: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { state, dispatch } = useContext(EditorContext);
  const {
    colors: { lightBackground }
  } = useContext(ThemeContext);

  return (
    <StyledBrushWidth className={className}>
      {brushWidths.map(({ brushWidth }) => (
        <div
          onClick={() =>
            dispatch({
              type: EditorActType.UPDATE_CANVAS_TOOL,
              payload: {
                brushWidth: brushWidth
              }
            })
          }
          data-brush-width={brushWidth}
          title={`${brushWidth} Pixel`}
          css={css`
            background-color: ${brushWidth === state.brushWidth
              ? lightBackground
              : "#ffffff"};
          `}
        >
          <div
            css={css`
              width: ${brushWidth}px;
              height: ${brushWidth}px;
            `}
          />
        </div>
      ))}
    </StyledBrushWidth>
  );
};

const StyledBrushWidth = styled.div`
  border-bottom: thin solid ${p => p.theme.colors.greys[8]};
  flex: 2;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    padding: ${p => `${p.theme.space[7]}px ${p.theme.space[7]}px`};
    cursor: pointer;

    &:hover {
      background: ${p => p.theme.colors.lightBackground};
    }

    div {
      background: ${p => p.theme.colors.greys[2]};
      border-radius: 50%;
    }
  }
`;

export default BrushWidth;
