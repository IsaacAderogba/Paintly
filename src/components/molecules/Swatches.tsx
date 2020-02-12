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

const colorSwatches: { swatch: DataAttributesEnum }[] = [
  {
    swatch: DataAttributesEnum.white
  },
  {
    swatch: DataAttributesEnum.black
  },
  {
    swatch: DataAttributesEnum.red
  },
  {
    swatch: DataAttributesEnum.green
  },
  {
    swatch: DataAttributesEnum.blue
  },
  {
    swatch: DataAttributesEnum.teal
  },
  {
    swatch: DataAttributesEnum.purple
  },
  {
    swatch: DataAttributesEnum.yellow
  },
  {
    swatch: DataAttributesEnum.sand
  },
  {
    swatch: DataAttributesEnum.orange
  },
  {
    swatch: DataAttributesEnum.lightblue
  },
  {
    swatch: DataAttributesEnum.pink
  }
];

const Swatches: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { state, dispatch } = useContext(EditorContext);
  const {
    colors: { lightBackground }
  } = useContext(ThemeContext);

  return (
    <StyledSwatches className={className}>
      {colorSwatches.map(({ swatch }) => (
        <div
          key={swatch}
          onClick={() =>
            dispatch({
              type: EditorActType.UPDATE_CANVAS_TOOL,
              payload: {
                swatch: swatch
              }
            })
          }
          data-color={swatch}
          css={css`
            background-color: ${swatch === state.swatch
              ? lightBackground
              : "#ffffff"};
          `}
        >
          <div
            css={css`
              background-color: ${swatch};
            `}
          />
        </div>
      ))}
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
