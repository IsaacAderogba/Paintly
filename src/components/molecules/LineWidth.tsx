// modules
import React from "react";
import { css } from "styled-components/macro";

// components/logic

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";
import dataAttributes from "../../~reusables/constants/dataAttributes";

const LineWidth: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <StyledLineWidth className={className}>
      <div data-line-width={dataAttributes.lineWidth1} title="1 Pixel">
        <div
          css={css`
            width: 1px;
            height: 1px;
          `}
        />
      </div>
      <div data-line-width={dataAttributes.lineWidth2} title="2 Pixel">
        <div
          css={css`
            width: 2px;
            height: 2px;
          `}
        />
      </div>
      <div data-line-width={dataAttributes.lineWidth3} title="3 Pixels">
        <div
          css={css`
            width: 3px;
            height: 3px;
          `}
        />
      </div>
      <div data-line-width={dataAttributes.lineWidth4} title="4 Pixels">
        <div
          css={css`
            width: 4px;
            height: 4px;
          `}
        />
      </div>
      <div data-line-width={dataAttributes.lineWidth5} title="5 Pixels">
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
