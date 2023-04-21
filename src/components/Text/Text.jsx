import React from "react";
import { StyledText } from "./Style/TextStyleElements";

const Text = ({ children, color }) => {
  return <StyledText color={color}>{children}</StyledText>;
};

export default Text;
