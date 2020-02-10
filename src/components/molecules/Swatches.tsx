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

const Swatches: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { state, dispatch } = useContext(EditorContext);
  const {
    colors: { lightBackground }
  } = useContext(ThemeContext);

  return (
    <StyledSwatches className={className}>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.white
            }
          })
        }
        data-color={DataAttributesEnum.white}
        css={css`
          background-color: ${DataAttributesEnum.white === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.white};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.black
            }
          })
        }
        data-color={DataAttributesEnum.black}
        css={css`
          background-color: ${DataAttributesEnum.black === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.black};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.red
            }
          })
        }
        data-color={DataAttributesEnum.red}
        css={css`
          background-color: ${DataAttributesEnum.red === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.red};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.green
            }
          })
        }
        data-color={DataAttributesEnum.green}
        css={css`
          background-color: ${DataAttributesEnum.green === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.green};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.blue
            }
          })
        }
        data-color={DataAttributesEnum.blue}
        css={css`
          background-color: ${DataAttributesEnum.blue === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.blue};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.teal
            }
          })
        }
        data-color={DataAttributesEnum.teal}
        css={css`
          background-color: ${DataAttributesEnum.teal === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.teal};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.purple
            }
          })
        }
        data-color={DataAttributesEnum.purple}
        css={css`
          background-color: ${DataAttributesEnum.purple === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.purple};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.yellow
            }
          })
        }
        data-color={DataAttributesEnum.yellow}
        css={css`
          background-color: ${DataAttributesEnum.yellow === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.yellow};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.sand
            }
          })
        }
        data-color={DataAttributesEnum.sand}
        css={css`
          background-color: ${DataAttributesEnum.sand === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.sand};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.orange
            }
          })
        }
        data-color={DataAttributesEnum.orange}
        css={css`
          background-color: ${DataAttributesEnum.orange === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.orange};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.lightblue
            }
          })
        }
        data-color={DataAttributesEnum.lightblue}
        css={css`
          background-color: ${DataAttributesEnum.lightblue === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.lightblue};
          `}
        />
      </div>
      <div
        onClick={() =>
          dispatch({
            type: EditorActType.UPDATE_CANVAS_TOOL,
            payload: {
              swatch: DataAttributesEnum.pink
            }
          })
        }
        data-color={DataAttributesEnum.pink}
        css={css`
          background-color: ${DataAttributesEnum.pink === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${DataAttributesEnum.pink};
          `}
        />
      </div>
    </StyledSwatches>
  );
};

const StyledSwatches = styled.div`
  border-bottom: thin solid ${p => p.theme.colors.greys[8]};
  flex: 1;

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
      height: 32px;
      width: 32px;
      border: thin solid ${p => p.theme.colors.greys[8]};
      border-radius: 4px;
    }
  }
`;

export default Swatches;
