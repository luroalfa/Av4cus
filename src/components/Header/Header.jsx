import React from "react";
import { HeaderStyle } from "./Style/HeaderStyleElements";
import HolderTop from "../HolderTop/HolderTop";
import Navbar from "../Nav/Navbar";

const Header = () => {
  return (
    <HeaderStyle>
      <HolderTop />
      <Navbar />
    </HeaderStyle>
  );
};

export default Header;
