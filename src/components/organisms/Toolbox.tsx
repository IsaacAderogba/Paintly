// modules
import React from "react";

// components/logic

// styles
import { styled } from "../../~reusables/contexts/ThemeContext";

interface ToolboxProps {
  align: "left" | "right";
}

const Toolbox: React.FC<ToolboxProps> = ({ children, align }) => {
  return <StyledToolbox align={align}>{children}</StyledToolbox>;
};

const StyledToolbox = styled("aside")<{ align: "left" | "right" }>`
  height: 100vh;
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  left: ${p => (p.align === "left" ? "0px" : "auto")};
  border-right: ${p =>
    p.align === "left" ? `1px solid ${p.theme.colors.greys[8]}` : 0};
  right: ${p => (p.align === "right" ? "0px" : "auto")};
  border-left: ${p =>
    p.align === "right" ? `1px solid ${p.theme.colors.greys[8]}` : 0};
  top: 0px;
`;

export default Toolbox;
