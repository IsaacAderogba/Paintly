// modules
import React, { useContext } from "react";
import { css } from "styled-components/macro";

// components/logic
import { EditorContext } from "../../~reusables/contexts/EditorContext";
import dataAttributes from "../../~reusables/constants/dataAttributes";

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
        data-color={dataAttributes.white}
        css={css`
          background-color: ${dataAttributes.white === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.white};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.black}
        css={css`
          background-color: ${dataAttributes.black === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.black};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.red}
        css={css`
          background-color: ${dataAttributes.red === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.red};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.green}
        css={css`
          background-color: ${dataAttributes.green === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.green};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.blue}
        css={css`
          background-color: ${dataAttributes.blue === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.blue};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.teal}
        css={css`
          background-color: ${dataAttributes.teal === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.teal};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.purple}
        css={css`
          background-color: ${dataAttributes.purple === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.purple};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.yellow}
        css={css`
          background-color: ${dataAttributes.yellow === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.yellow};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.sand}
        css={css`
          background-color: ${dataAttributes.sand === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.sand};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.orange}
        css={css`
          background-color: ${dataAttributes.orange === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.orange};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.lightblue}
        css={css`
          background-color: ${dataAttributes.lightblue === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.lightblue};
          `}
        />
      </div>
      <div
        data-color={dataAttributes.pink}
        css={css`
          background-color: ${dataAttributes.pink === state.swatch
            ? lightBackground
            : "#ffffff"};
        `}
      >
        <div
          css={css`
            background-color: ${dataAttributes.pink};
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
