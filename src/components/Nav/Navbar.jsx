import React, { useMemo, useState } from "react";
import {
  NavbarContainer,
  LogoContainer,
  Logotype,
  IconNav,
  Menu,
  MenuItem,
  LinkRouter,
  HamburgerIcon,
  MobileMenu,
  CloseIcon,
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

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const MobileMenuItem = ({ to, active, iconSrc, alt, children, onClick }) => (
    <LinkRouter to={to} active={active} onClick={onClick}>
      {iconSrc && <IconNav src={iconSrc} alt={alt} />}
      {children}
    </LinkRouter>
  );

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
      {document.body.classList.toggle("no-scroll", menuOpen)}
      {menuOpen ? (
        <CloseIcon onClick={toggleMenu} />
      ) : (
        <HamburgerIcon onClick={toggleMenu} />
      )}

      {menuOpen && (
        <MobileMenu>
          <MobileMenuItem
            to="/FAQs"
            active={activePage === "faqs" ? "true" : ""}
            onClick={toggleMenu}
            iconSrc={Faqs}
            alt="Preguntas Frecuentes"
          >
            Faqs
          </MobileMenuItem>

          <MobileMenuItem
            to="/"
            active={activePage === "home" ? "true" : ""}
            onClick={toggleMenu}
            iconSrc={Home}
            alt="Inicio"
          >
            Inicio
          </MobileMenuItem>

          <MobileMenuItem
            to="/About"
            active={activePage === "about" ? "true" : ""}
            onClick={toggleMenu}
            iconSrc={AboutUs}
            alt="Sombre nosotros"
          >
            Nosotros
          </MobileMenuItem>

          <MobileMenuItem
            to="/Services"
            active={activePage === "services" ? "true" : ""}
            onClick={toggleMenu}
            iconSrc={Services}
            alt="Servicios"
          >
            Servicios
          </MobileMenuItem>

          <MobileMenuItem
            to="/Contact"
            active={activePage === "contact" ? "true" : ""}
            onClick={toggleMenu}
            iconSrc={Contact}
            alt="Contacto"
          >
            Contacto
          </MobileMenuItem>
        </MobileMenu>
      )}

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
