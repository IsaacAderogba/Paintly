import React from "react";
import { styled } from "../../~reusables/contexts/ThemeContext";

const LineWidth: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return <StyledLineWidth className={className}>LineWidth</StyledLineWidth>;
};

const StyledLineWidth = styled.div``;

export default LineWidth;
