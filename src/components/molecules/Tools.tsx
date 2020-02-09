// modules
import React from "react";
import { FaPencilAlt, FaBrush, FaEraser } from "react-icons/fa";
import { GiPaintBucket } from "react-icons/gi";

// components/logic
import dataAttributes from "../../~reusables/constants/dataAttributes";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Tools: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <StyledTools className={className}>
      <div data-tool={dataAttributes.pencil} title="Pencil">
        <FaPencilAlt fontSize={40} />
      </div>
      <div data-tool={dataAttributes.brush} title="Brush">
        <FaBrush fontSize={40} />
      </div>
      <div data-tool={dataAttributes.paint} title="Paint">
        <GiPaintBucket fontSize={40} />
      </div>
      <div data-tool={dataAttributes.eraser} title="Eraser">
        <FaEraser fontSize={40} />
      </div>
    </StyledTools>
  );
};

const StyledTools = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Tools;
