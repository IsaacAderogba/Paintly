// modules
import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquare, FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";

// components/logic
import dataAttributes from "../../~reusables/constants/dataAttributes";

// styles
import { styled, useTheme } from "../../~reusables/contexts/ThemeContext";

const Shapes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const theme = useTheme();

  return (
    <StyledShapes className={className}>
      <div data-shape={dataAttributes.line} title="Line">
        <AiOutlineMinus fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div data-shape={dataAttributes.rectangle} title="Rectangle">
        <FaRegSquare fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div data-shape={dataAttributes.circle} title="Circle">
        <FaRegCircle fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div data-shape={dataAttributes.triangle} title="Triangle">
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
