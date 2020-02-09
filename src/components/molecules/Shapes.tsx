import React from "react";
import { styled } from "../../~reusables/contexts/ThemeContext";

const Shapes: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return <StyledShapes className={className}>Shapes</StyledShapes>;
};

const StyledShapes = styled.div``;

export default Shapes;
