import React from "react";
import {
  ContainerHolderTop,
  UnorderedList,
  ListItem,
  Anchor,
  LinkRouter,
  SubContainer,
} from "./Style/HolderTopStyles";
import contactData from "../../store/contactData";
import socialLinks from "../../store/socialLinks";
import { AiOutlineFieldTime } from "react-icons/ai";

const linkAttrs = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const timeIcon = <AiOutlineFieldTime />;

const HolderTop = () => {
  return (
    <ContainerHolderTop>
      <UnorderedList>
        {contactData.map((info) => (
          <ListItem key={info.id}>
            <info.icon />
            <Anchor href={info.href} {...linkAttrs}>
              {info.label}
            </Anchor>
          </ListItem>
        ))}
      </UnorderedList>
      <SubContainer>
        {timeIcon}
        <LinkRouter to="/Contact">
          <p>Lunes-Viernes 07:00 AM - 05:00 PM</p>
        </LinkRouter>
      </SubContainer>
      <SubContainer>
        <p>¡Síguenos en redes sociales y sé el primero en verlo!</p>
        <UnorderedList>
          {socialLinks.map((link) => (
            <ListItem key={link.id}>
              <Anchor
                href={link.href}
                {...linkAttrs}
                aria-label={link.ariaLabel}
              >
                <link.icon />
              </Anchor>
            </ListItem>
          ))}
        </UnorderedList>
      </SubContainer>
    </ContainerHolderTop>
  );
};

export default HolderTop;
