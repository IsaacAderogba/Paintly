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

const LineWidth: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { state, dispatch } = useContext(EditorContext);
  const {
    colors: { lightBackground }
  } = useContext(ThemeContext);

  return (
    <StyledLineWidth className={className}>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              linewidth: DataAttributesEnum.lineWidth1
            }
          })
        }
        data-line-width={DataAttributesEnum.lineWidth1}
        title="1 Pixel"
        css={css`
          background-color: ${DataAttributesEnum.lineWidth1 === state.linewidth
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            width: 1px;
            height: 1px;
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              linewidth: DataAttributesEnum.lineWidth2
            }
          })
        }
        data-line-width={DataAttributesEnum.lineWidth2}
        title="2 Pixel"
        css={css`
          background-color: ${DataAttributesEnum.lineWidth2 === state.linewidth
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            width: 2px;
            height: 2px;
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              linewidth: DataAttributesEnum.lineWidth3
            }
          })
        }
        data-line-width={DataAttributesEnum.lineWidth3}
        title="3 Pixels"
        css={css`
          background-color: ${DataAttributesEnum.lineWidth3 === state.linewidth
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            width: 3px;
            height: 3px;
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              linewidth: DataAttributesEnum.lineWidth4
            }
          })
        }
        data-line-width={DataAttributesEnum.lineWidth4}
        title="4 Pixels"
        css={css`
          background-color: ${DataAttributesEnum.lineWidth4 === state.linewidth
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            width: 4px;
            height: 4px;
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              linewidth: DataAttributesEnum.lineWidth5
            }
          })
        }
        data-line-width={DataAttributesEnum.lineWidth5}
        title="5 Pixels"
        css={css`
          background-color: ${DataAttributesEnum.lineWidth5 === state.linewidth
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            width: 5px;
            height: 5px;
          `}
        />
      </div>
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
