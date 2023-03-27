import React, { Children } from "react";
import { ContainerStyle } from "./Style/ContainerStyleElements";

const Container = ({ children, center }) => {
  return (
    <ContainerStyle center={center}>
      {Children.toArray(children)}
    </ContainerStyle>
  );
};

export default Container;
