import React from "react";
import { styled } from "../../~reusables/contexts/ThemeContext";

const Tools: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return <StyledTools className={className}>Tools</StyledTools>;
};

const StyledTools = styled.div``;

export default Tools;
