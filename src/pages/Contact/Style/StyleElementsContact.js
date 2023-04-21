import styled from "styled-components";
import { mediaQueries } from "../../../styles/responsive";
import ImgContact from "../../../assets/images/Contact/contact.jpg";

export const ContainerFormMap = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 40px;    
  ${mediaQueries.md} {
    flex-direction: column;
  }
`;

export const SubContainerFormMap = styled.div`
  width: 50%;
  ${mediaQueries.md} {
    width: 80%;
  }
`;

export const SectionContact = styled.section`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 50px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url(${ImgContact});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  width: 100%;
  ${mediaQueries.md} {
    background-position: 80% center;
    flex-direction: column;
    height: 100vh;
  }
`;

export const ContactIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &.animateOnHover:hover {
    animation-name: bounce;
    animation-duration: 1s;
    animation-timing-function: linear;
  }
`;

export const ActionLink = styled.a`
text-decoration: none;
`;