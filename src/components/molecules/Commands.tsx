import React from "react";
import { styled } from "../../~reusables/contexts/ThemeContext";

const Commands: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return <StyledCommands className={className}>Commands</StyledCommands>;
};

const StyledCommands = styled.div``;

export default Commands;
