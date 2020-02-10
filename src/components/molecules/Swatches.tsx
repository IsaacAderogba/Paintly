// modules
import React from "react";
import { css } from "styled-components/macro";

// components/logic

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";
import dataAttributes from "../../~reusables/constants/dataAttributes";

const Swatches: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <StyledSwatches className={className}>
      <div data-color={dataAttributes.white}>
        <div
          css={css`
            background-color: ${dataAttributes.white};
          `}
        />
      </div>
      <div data-color={dataAttributes.black}>
        <div
          css={css`
            background-color: ${dataAttributes.black};
          `}
        />
      </div>
      <div data-color={dataAttributes.red}>
        <div
          css={css`
            background-color: ${dataAttributes.red};
          `}
        />
      </div>
      <div data-color={dataAttributes.green}>
        <div
          css={css`
            background-color: ${dataAttributes.green};
          `}
        />
      </div>
      <div data-color={dataAttributes.blue}>
        <div
          css={css`
            background-color: ${dataAttributes.blue};
          `}
        />
      </div>
      <div data-color={dataAttributes.teal}>
        <div
          css={css`
            background-color: ${dataAttributes.teal};
          `}
        />
      </div>
      <div data-color={dataAttributes.purple}>
        <div
          css={css`
            background-color: ${dataAttributes.purple};
          `}
        />
      </div>
      <div data-color={dataAttributes.yellow}>
        <div
          css={css`
            background-color: ${dataAttributes.yellow};
          `}
        />
      </div>
      <div data-color={dataAttributes.sand}>
        <div
          css={css`
            background-color: ${dataAttributes.sand};
          `}
        />
      </div>
      <div data-color={dataAttributes.orange}>
        <div
          css={css`
            background-color: ${dataAttributes.orange};
          `}
        />
      </div>
      <div data-color={dataAttributes.lightblue}>
        <div
          css={css`
            background-color: ${dataAttributes.lightblue};
          `}
        />
      </div>
      <div data-color={dataAttributes.pink}>
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
