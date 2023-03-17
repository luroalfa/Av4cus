import React from "react";
import {
  NavbarContainer,
  LogoContainer,
  Logotype,
  Logo,
  Menu,
  MenuItem,
  NavLink,
} from "./Style/NavbarStyleElements";
import LogotypeImage from "../../assets/logos/logo-av4cus-GUNMETAL.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logotype
          src={LogotypeImage}
          alt="Logotipo"
          title="Isotipo de AV4CUS"
          width="64px"
          height="64px"
        />
        <Logo href="#">Av4cus</Logo>
      </LogoContainer>
      <Menu>
        <MenuItem>
          <NavLink href="#">Inicio</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#">Synapse</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#">Move0n</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#">Nosotros</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="#">Contacto</NavLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
