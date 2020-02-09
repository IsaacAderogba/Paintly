// modules
import React from "react";
import { FaUndo, FaCloudDownloadAlt } from "react-icons/fa";

// components/logic
import dataAttributes from "../../~reusables/constants/dataAttributes";

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Commands: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <StyledCommands className={className}>
      <div data-command={dataAttributes.undo} title="Undo">
        <FaUndo fontSize={40} />
      </div>
      <div data-command={dataAttributes.download} title="Download">
        <FaCloudDownloadAlt fontSize={40} />
      </div>
    </StyledCommands>
  );
};

const StyledCommands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Commands;
