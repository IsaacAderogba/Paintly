// modules
import React from "react";

// components/logic

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

const Toolbox: React.FC = ({ children }) => {
  return <StyledToolbox>{children}</StyledToolbox>;
};

const StyledToolbox = styled.aside``;

export default Toolbox;
