// modules
import React from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { FaRegSquare, FaRegCircle } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";

// components/logic
import dataAttributes from "../../~reusables/constants/dataAttributes";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Shapes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <StyledShapes className={className}>
      <div data-shape={dataAttributes.line} title="Line">
        <AiOutlineMinus fontSize={40} />
      </div>
      <div data-shape={dataAttributes.rectangle} title="Rectangle">
        <FaRegSquare fontSize={40} />
      </div>
      <div data-shape={dataAttributes.circle} title="Circle">
        <FaRegCircle fontSize={40} />
      </div>
      <div data-shape={dataAttributes.triangle} title="Triangle">
        <FiTriangle fontSize={40} />
      </div>
    </StyledShapes>
  );
};

const StyledShapes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Shapes;
