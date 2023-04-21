import React from "react";
import { StyledSmallText } from "./Style/StyledSmallText";

const SmallText = ({ children, color }) => {
  return <StyledSmallText color={color}>{children}</StyledSmallText>;
};

export default SmallText;
