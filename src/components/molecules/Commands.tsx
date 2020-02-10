// modules
import React from "react";
import { FaUndo, FaCloudDownloadAlt } from "react-icons/fa";

// components/logic
import DataAttributesEnum from "../../~reusables/constants/dataAttributes";

// styles
import { styled, useTheme } from "../../~reusables/contexts/ThemeContext";

const Commands: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const theme = useTheme();

  return (
    <StyledCommands className={className}>
      <div data-command={DataAttributesEnum.undo} title="Undo">
        <FaUndo fontSize={32} color={theme.colors.greys[2]} />
      </div>
      <div data-command={DataAttributesEnum.download} title="Download">
        <FaCloudDownloadAlt fontSize={32} color={theme.colors.greys[2]} />
      </div>
    </StyledCommands>
  );
};

const StyledCommands = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: thin solid ${p => p.theme.colors.greys[8]};
  flex: 1;

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

export default Commands;
