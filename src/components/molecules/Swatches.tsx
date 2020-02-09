import React from "react";
import { styled } from "../../~reusables/contexts/ThemeContext";

const Swatches: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return <StyledSwatches className={className}>Swatches</StyledSwatches>;
};

const StyledSwatches = styled.div``;

export default Swatches;
