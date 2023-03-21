import React, { Children } from "react";
import { ContainerStyle } from "./Style/ContainerStyleElements";

const Container = ({ children }) => {
  return <ContainerStyle>{Children.toArray(children)}</ContainerStyle>;
};

export default Container;
