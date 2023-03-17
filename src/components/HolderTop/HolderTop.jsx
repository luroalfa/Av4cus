import React from "react";
import {
  ContainerHolderTop,
  UnorderedList,
  ListItem,
  Anchor,
  LinkRouter,
  SubContainer,
} from "./Style/HolderTopStyles";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillPhone,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const HolderTop = () => {
  return (
    <ContainerHolderTop>
      <UnorderedList>
        <ListItem>
          <AiFillPhone />
          <Anchor
            href="tel:+50684959211"
            target="_blank"
            rel="noopener noreferrer"
          >
            +(506) 8495-9211
          </Anchor>
        </ListItem>
        <ListItem>
          <HiLocationMarker />
          <Anchor
            href="https://www.google.com/maps?q=Heredia+Costa+Rica"
            target="_blank"
            rel="noopener noreferrer"
          >
            Heredia, Costa Rica
          </Anchor>
        </ListItem>
        <ListItem>
          <MdEmail />
          <Anchor
            href="mailto:Av4cus@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av4cus@gmail.com
          </Anchor>
        </ListItem>
      </UnorderedList>
      <SubContainer>
        <AiOutlineFieldTime />
        <LinkRouter to="/contact">
          <p>Lunes-Viernes 07:00 AM - 05:00 PM</p>
        </LinkRouter>
      </SubContainer>
      <SubContainer>
        <p>¡Síguenos en redes sociales y sé el primero en verlo!</p>
        <UnorderedList>
          <ListItem>
            <Anchor
              href="https://www.facebook.com/"
              target={"_blank"}
              rel="noopener noreferrer"
              aria-label="Abrir facebook"
            >
              <BsFacebook />
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              href="https://www.linkedin.com/"
              target={"_blank"}
              rel="noopener noreferrer"
              aria-label="Abrir linkedin"
            >
              <BsLinkedin />
            </Anchor>
          </ListItem>
          <ListItem>
            <Anchor
              href="https://www.instagram.com/"
              target={"_blank"}
              rel="noopener noreferrer"
              aria-label="Abrir instagram"
            >
              <AiFillInstagram />
            </Anchor>
          </ListItem>
        </UnorderedList>
      </SubContainer>
    </ContainerHolderTop>
  );
};

export default HolderTop;
