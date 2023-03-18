import React, { useMemo } from "react";
import {
  NavbarContainer,
  LogoContainer,
  Logotype,
  IconNav,
  Menu,
  MenuItem,
  LinkRouter,
} from "./Style/NavbarStyleElements";
import LogotypeImage from "../../assets/logos/logo-av4cus-GUNMETAL.svg";
import Faqs from "../../assets/images/icons/faq.svg";
import Home from "../../assets/images/icons/home.svg";
import Services from "../../assets/images/icons/services.svg";
import Contact from "../../assets/images/icons/contact.svg";
import AboutUs from "../../assets/images/icons/nosotros.svg";
import { useLocation } from "react-router-dom";

const routes = {
  home: "/",
  about: "/About",
  contact: "/Contact",
  faqs: "/FAQs",
  services: "/Services",
};
const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const activePage = useMemo(() => {
    if (currentPage === routes.home) return "home";
    if (currentPage === routes.about) return "about";
    if (currentPage === routes.contact) return "contact";
    if (currentPage === routes.faqs) return "faqs";
    if (currentPage === routes.services) return "services";
  }, [location.pathname, routes]);

  return (
    <NavbarContainer>
      <LogoContainer to="/">
        <Logotype
          src={LogotypeImage}
          alt="Logotipo"
          title="Isotipo de AV4CUS"
        />
        Av4cus
      </LogoContainer>
      <Menu>
        <MenuItem>
          <LinkRouter to="/FAQs" active={activePage === "faqs" ? "true" : ""}>
            <IconNav src={Faqs} alt="Preguntas Frecuentes" />
            Faqs
          </LinkRouter>
        </MenuItem>
        <MenuItem>
          <LinkRouter to="/" active={activePage === "home" ? "true" : ""}>
            <IconNav src={Home} alt="Inicio" />
            Inicio
          </LinkRouter>
        </MenuItem>
        <MenuItem>
          <LinkRouter to="/About" active={activePage === "about" ? "true" : ""}>
            <IconNav src={AboutUs} alt="Sombre nosotros" />
            Nosotros
          </LinkRouter>
        </MenuItem>
        <MenuItem>
          <LinkRouter
            to="/Services"
            active={activePage === "services" ? "true" : ""}
          >
            <IconNav src={Services} alt="Servicios" />
            Servicios
          </LinkRouter>
        </MenuItem>
        <MenuItem>
          <LinkRouter
            to="/Contact"
            active={activePage === "contact" ? "true" : ""}
          >
            <IconNav src={Contact} alt="Contacto" />
            Contacto
          </LinkRouter>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
