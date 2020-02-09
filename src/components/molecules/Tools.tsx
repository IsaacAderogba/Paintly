// modules
import React from "react";
import { FaPencilAlt, FaBrush, FaEraser } from "react-icons/fa";
import { GiPaintBucket } from "react-icons/gi";

// components/logic
import dataAttributes from "../../~reusables/constants/dataAttributes";

// styles
import { styled, useTheme } from "../../~reusables/contexts/ThemeContext";

const Tools: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const theme = useTheme();

  return (
    <StyledTools className={className}>
      <div data-tool={dataAttributes.pencil} title="Pencil">
        <FaPencilAlt fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div data-tool={dataAttributes.brush} title="Brush">
        <FaBrush fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div data-tool={dataAttributes.paint} title="Paint">
        <GiPaintBucket fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div data-tool={dataAttributes.eraser} title="Eraser">
        <FaEraser fontSize={32} color={theme.colors.greys[2]} />
      </div>
    </StyledTools>
  );
};

const StyledTools = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: thin solid ${p => p.theme.colors.greys[8]};
  cursor: pointer;
  flex: 2;

  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${p => `${p.theme.space[5]}px ${p.theme.space[7]}px`};
  }

  & > div:hover {
    background: ${p => p.theme.colors.lightBackground};
  }
`;

export default Tools;
