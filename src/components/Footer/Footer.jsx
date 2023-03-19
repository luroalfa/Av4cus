import React from "react";
import {
  FooterContainer,
  Content,
  FooterContent,
  SocialIcons,
  Copyright,
  ColumnList,
  ColumnListItem,
  ColumnTitle,
  Logo,
  SocialIcon,
  Column,
} from "./Style/FooterStyleElements";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import LogoWhite from "../../assets/logos/logo-av4cus-WHITE.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Content>
        <Logo src={LogoWhite} alt="Logo" />
        <FooterContent>
          <Column>
            <ColumnTitle>¿POR QUÉ AV4CUS?</ColumnTitle>
            <ColumnList>
              <ColumnListItem>Soluciones personalizadas</ColumnListItem>
              <ColumnListItem>Soporte técnico dedicado</ColumnListItem>
              <ColumnListItem>Enfoque al cliente</ColumnListItem>
              <ColumnListItem>Ver demostración</ColumnListItem>
            </ColumnList>
          </Column>
          <Column>
            <ColumnTitle>SERVICIOS</ColumnTitle>
            <ColumnList>
              <ColumnListItem>Syn4pse</ColumnListItem>
              <ColumnListItem>Move0n</ColumnListItem>
            </ColumnList>
          </Column>
          <Column>
            <ColumnTitle>SERVICIO AL CLIENTE</ColumnTitle>
            <ColumnList>
              <ColumnListItem>Hablar con ventas</ColumnListItem>
              <ColumnListItem>Asesoramiento</ColumnListItem>
              <ColumnListItem>Prueba gratis</ColumnListItem>
              <ColumnListItem>Consultas</ColumnListItem>
            </ColumnList>
          </Column>
          <Column>
            <ColumnTitle>CONTACTO</ColumnTitle>
            <ColumnList>
              <ColumnListItem>
                Horario:
                <span>
                  Lunes - Viernes
                  <span>7:00am - 5:00pm</span>
                </span>
              </ColumnListItem>
              <ColumnListItem>Av4cus@gmail.com</ColumnListItem>
              <ColumnListItem>+(506) 8495-9211</ColumnListItem>
            </ColumnList>
          </Column>
        </FooterContent>
      </Content>
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com">
          <FaInstagram />
        </SocialIcon>
      </SocialIcons>
      <Copyright>
        © 2023 AV4CUS, Inc.<span>Todos los derechos reservados.</span>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
