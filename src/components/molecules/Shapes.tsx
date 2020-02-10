// modules
import React, { useContext } from "react";
import { css } from "styled-components/macro";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquare, FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";

// components/logic
import dataAttributes from "../../~reusables/constants/dataAttributes";
import { EditorContext } from "../../~reusables/contexts/EditorContext";

// styles
import { styled, useTheme } from "../../~reusables/contexts/ThemeContext";

const Shapes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const { state, dispatch } = useContext(EditorContext);
  const theme = useTheme();

  return (
    <StyledShapes className={className}>
      <div
        data-shape={dataAttributes.line}
        title="Line"
        css={css`
          background-color: ${dataAttributes.line === state.shape
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
      >
        <AiOutlineMinus fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div
        data-shape={dataAttributes.rectangle}
        title="Rectangle"
        css={css`
          background-color: ${dataAttributes.rectangle === state.shape
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
      >
        <FaRegSquare fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div
        data-shape={dataAttributes.circle}
        title="Circle"
        css={css`
          background-color: ${dataAttributes.circle === state.shape
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
      >
        <FaRegCircle fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div
        data-shape={dataAttributes.triangle}
        title="Triangle"
        css={css`
          background-color: ${dataAttributes.triangle === state.shape
            ? theme.colors.lightBackground
            : "#ffffff"};
        `}
      >
        <FiTriangle fontSize={32} color={theme.colors.greys[2]} />
      </div>
    </StyledShapes>
  );
};

const StyledShapes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: thin solid ${p => p.theme.colors.greys[8]};
  flex: 2;

  & > div {
    flex: 1;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: ${p => `${p.theme.space[6]}px ${p.theme.space[7]}px`};
  }

  & > div:hover {
    background: ${p => p.theme.colors.lightBackground};
  }
`;

export default Shapes;
