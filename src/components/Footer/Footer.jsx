import React from "react";
import {
  ColumnList,
  ColumnListItem,
  ColumnTitle,
  Copyright,
  FooterContainer,
  SocialIcon,
  FooterContent,
  Logo,
  Column,
  SocialIcons,
} from "./Style/FooterStyleElements";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src="path/to/logo" alt="Logo" />
        <Column>
          <ColumnTitle>Columna 1</ColumnTitle>
          <ColumnList>
            <ColumnListItem>Elemento 1</ColumnListItem>
            <ColumnListItem>Elemento 2</ColumnListItem>
            <ColumnListItem>Elemento 3</ColumnListItem>
          </ColumnList>
        </Column>
        <Column>
          <ColumnTitle>Columna 2</ColumnTitle>
          <ColumnList>
            <ColumnListItem>Elemento 1</ColumnListItem>
            <ColumnListItem>Elemento 2</ColumnListItem>
            <ColumnListItem>Elemento 3</ColumnListItem>
          </ColumnList>
        </Column>
        <Column>
          <ColumnTitle>Columna 3</ColumnTitle>
          <ColumnList>
            <ColumnListItem>Elemento 1</ColumnListItem>
            <ColumnListItem>Elemento 2</ColumnListItem>
            <ColumnListItem>Elemento 3</ColumnListItem>
          </ColumnList>
        </Column>
        <Column>
          <ColumnTitle>Columna 4</ColumnTitle>
          <ColumnList>
            <ColumnListItem>Elemento 1</ColumnListItem>
            <ColumnListItem>Elemento 2</ColumnListItem>
            <ColumnListItem>Elemento 3</ColumnListItem>
          </ColumnList>
        </Column>
      </FooterContent>
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
      <Copyright>© 2023 AV4CUS, Inc. Todos los derechos reservados.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
