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

const lineWidths = [
  { lineWidth: DataAttributesEnum.lineWidth1 },
  { lineWidth: DataAttributesEnum.lineWidth2 },
  { lineWidth: DataAttributesEnum.lineWidth3 },
  { lineWidth: DataAttributesEnum.lineWidth4 },
  { lineWidth: DataAttributesEnum.lineWidth5 }
];

const LineWidth: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { state, dispatch } = useContext(EditorContext);
  const {
    colors: { lightBackground }
  } = useContext(ThemeContext);

  return (
    <StyledLineWidth className={className}>
      {lineWidths.map(({ lineWidth }) => (
        <div
          onClick={() =>
            dispatch({
              type: EditorActType.UPDATE_CANVAS_TOOL,
              payload: {
                linewidth: lineWidth
              }
            })
          }
          data-line-width={lineWidth}
          title={`${lineWidth} Pixel`}
          css={css`
            background-color: ${lineWidth === state.linewidth
              ? lightBackground
              : "#ffffff"};
          `}
        >
          <div
            css={css`
              width: ${lineWidth}px;
              height: ${lineWidth}px;
            `}
          />
        </div>
      ))}
    </StyledLineWidth>
  );
};

const StyledLineWidth = styled.div`
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

export default LineWidth;
